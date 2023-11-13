import { useState } from 'react';
import { Modal, ScrollView, Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Button } from '../../components/button';
import DateTimePickerModal from 'react-native-modal-datetime-picker'

import { COLORS } from '../../assets/COLORS';
import styles from './styles';
import moment from 'moment';

const Schedule = ({ navigation }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDateModalOpen, setIsDateModalOpen] = useState(false);
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedHour, setSelectedHour] = useState('');

    function switchModal() {
        isModalOpen ? null : switchDateModal()
        setIsModalOpen(!isModalOpen)
    }

    function switchDateModal() {
        setIsDateModalOpen(!isDateModalOpen)
    }

    function handleConfirmHour(hour) {
        setSelectedHour(moment(selectedHour).format('HH:mm'))
        console.log(selectedDay + "    " + selectedHour)
        switchModal()
    }

    function test() {
        console.log("here")

    }

    return <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.textHeader}>Agendar Exame</Text>
        </View>
        <View style={styles.body}>
            <ScrollView contentContainerStyle={styles.scroll}>
                <Text style={styles.textBody}>Agende seu exame, esolha o dia e veja os horários disponíveis</Text>
                <Calendar
                    style={styles.calendar}
                    onDayPress={day => {
                        setSelectedDay(moment(day.dateString).format('DD/MM/YYYY'))
                        switchDateModal()
                    }}
                    markedDates={{
                        [selectedDay]: { selected: true, disableTouchEvent: true, selectedColor: COLORS.MAIN }
                    }}
                />
            </ScrollView>

        </View>
        <View style={styles.footer} />

        <DateTimePickerModal isVisible={isDateModalOpen} mode='time' onConfirm={handleConfirmHour} onCancel={switchDateModal} />

        <Modal visible={isModalOpen} transparent={true} animationType="slide">
            <View style={styles.modalShadow}>
                <View style={styles.modal}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                        <Text style={styles.modalText}>Agendar</Text>
                    </View>
                    <Text style={styles.modalText}>Dia: {selectedDay}</Text>
                    <Text style={styles.modalText}>Horário: {selectedHour}</Text>
                    <View style={styles.modalTime}>
                        <Button text={"Solicitar Agendamento"} type={'primary'} action={switchModal} />
                        <Button text={"Cancelar"} type={'secondary'} action={test} />
                    </View>
                </View>
            </View>
        </Modal>
    </View>

}

export default Schedule;