import { FontAwesome5 } from "@expo/vector-icons";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Text, View, Modal } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { COLORS } from "../assets/COLORS";
import { Button } from "./button";
// import { Modal } from 'react-native-paper'
import styles from './styles';
import { exam } from "./_interfaces";

export function ExamCard(props: { exams: exam[] }) {


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [examDate, setExamDate] = useState("");
    const [examName, setExamName] = useState("");
    const [examResponsible, setExamResponsible] = useState("");

    function pdfView(item: exam) {
        return (
            <RectButton style={styles.examCardInternViewIcon} key={"Level_4_" + item.id}>
                <FontAwesome5 name="file-download" size={32} color={COLORS.WHITE} />
            </RectButton>
        )
    }

    function handleOpenModal(item: exam) {
        setExamDate("" + moment(item.Date).format('DD/MM/YYYY'));
        setExamName("" + item.name);
        setExamResponsible("" + item.Responsible);

        switchModal()
    }

    function switchModal() {
        console.log("hi")
        setIsModalOpen(!isModalOpen)
    }

    var reverseMap = props.exams;

    return (
        <View style={styles.examCardGenericView}>
            {reverseMap.reverse().map((item) => {
                return (
                    <RectButton style={styles.examCardButton} key={"Level_1_" + item.id} onPress={() => handleOpenModal(item)}>
                        <View style={styles.examCardInternViewText} key={"Level_2_" + item.id}>
                            <Text style={styles.examCardButtonText} key={"Level_3_" + item.id}>{item.name + " - " + moment(item.Date).format('DD/MM/YYYY')}</Text>
                        </View>
                        {
                            item.downloadable
                                ? pdfView(item)
                                : null
                        }
                    </RectButton>
                )
            }
            )}

            <Modal visible={isModalOpen} transparent={true} animationType="slide">
                <View style={styles.modalShadow}>
                    <View style={styles.modal}>
                        <Text style={styles.modalText}>Exame: Papanicolau</Text>
                        <Text style={styles.modalText}>Data: 19/08/2022</Text>
                        <Text style={styles.modalText}>Responsável: Dr. Daniel Reinaldo</Text>
                        <Button text={"Fechar"} type={'secondary'} action={() => switchModal} />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

