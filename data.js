// Main content for the Comparing Quantities educational app
const AppText = {
    page1: {
        title: "Comparing Quantities",
        line1: "What information do you need to compare quantities?",
        line2: "Let's look at the 'crowdedness' of a bus.",
        line3: "Click 'Start' to explore!",
        startButton: "Start"
    },
    page2: {
        topBar: "Guess the answer with the information given.",
        question_line1: "Bus A has 40 kids.",
        question_line2: "Bus B has 30 kids.",
        main_question: "Which bus is more crowded?",
        options_title: "Select an option.",
        option_A: "Bus A",
        option_B: "Bus B",
        bottomBar: "Tap the 'bus' button you think is correct."
    },
    page3: {
        header: "You did not have all the information you needed.",
        busA_caption1: "Bus A can seat 36 kids",
        busA_caption2: "and 40 kids are sent to Bus A",
        busB_caption1: "Bus B can seat 20 kids",
        busB_caption2: "and 30 kids are sent to Bus B",
        concept: "The more crowded bus is not just about how many kids are in the bus!",
        nextButton: "Next"
    },
    page4: {
        header: "Let's fill Bus A and check.",
        busA_chip: "40 kids to 36 seats",
        busB_chip: "30 kids to 20 seats",
        fillButton: "Fill Bus A",
        bottomBar: "Tap on 'Fill Bus A'."
    },
    page5: {
        header: "Bus A filled! Now, let's fill Bus B.",
        busA_chip: "40 kids to 36 seats",
        standingLabel: "4 standing",
        busB_chip: "30 kids to 20 seats",
        fillButton: "Fill Bus B",
        bottomBar: "Tap on 'Fill Bus B'."
    },
    page6: {
        header: "Bus B filled! Now, what do you think?",
        busA_chip: "40 kids to 36 seats",
        busA_standing: "4 standing",
        busB_chip: "30 kids to 20 seats",
        busB_standing: "10 standing",
        bottomBar: "Tap ▸ to continue."
    },
    page7: {
        header: "With all this information, which bus is more crowded?",
        busA_chip: "40 kids to 36 seats",
        busA_standing: "4 standing",
        busB_chip: "30 kids to 20 seats",
        busB_standing: "10 standing",
        options_title: "Select an option.",
        option_A: "Bus A",
        option_B: "Bus B",
        feedback_correct: "Bus B has lesser space as compared to Bus A. So, it is more crowded.",
        feedback_incorrect: "Bus A has a lot of standing space still.",
        bottomBar: "Tap ▸ to continue.",
        correctOption: "B"
    },
    page8: {
        header: "Let's look at two other buses.",
        busC_caption1: "Bus C can seat 45 kids",
        busC_caption2: "and 52 kids are sent to Bus C",
        busD_caption1: "Bus D can seat 30 kids",
        busD_caption2: "and 37 kids are sent to Bus D",
        concept: "Think of the answer in terms of kids standing and seated.",
        nextButton: "Next"
    },
    page9: {
        header: "Nice guess! But, let's fill and explore.",
        busC_chip: "52 kids to 45 seats",
        busD_chip: "37 kids to 30 seats",
        fillButton: "Fill Bus C",
        bottomBar: "Tap on 'Fill Bus C'."
    },
    page10: {
        header: "Bus C filled! Now, let's fill Bus D.",
        busC_chip: "52 kids to 45 seats",
        standingLabelC: "7 standing",
        busD_chip: "37 kids to 30 seats",
        fillButton: "Fill Bus D",
        bottomBar: "Tap on 'Fill Bus D'."
    },
    page11: {
        header: "Bus C filled! Now, let's fill Bus D.",
        busC_chip: "52 kids to 45 seats",
        standingLabelC: "7 standing",
        busD_chip: "37 kids to 30 seats",
        standingLabelD: "7 standing",
        bottomBar: "Tap ▸ to continue."
    },
    page12: {
        header: "Now think, which bus is more crowded?",
        busC_chip: "52 kids to 45 seats",
        busC_standing: "7 standing",
        busD_chip: "37 kids to 30 seats",
        busD_standing: "7 standing",
        options_title: "Select an option.",
        option_C: "Bus C",
        option_D: "Bus D",
        option_Equal: "Equally Crowded",
        bottomBar: "Tap the 'bus' button you think is correct.",
        correctOption: "D",
        feedback_correct: "Bus D has lesser space as compared to Bus C. So, it is more crowded.",
        feedback_incorrect: "Both buses have the same number of kids standing, still there is more space to stand in Bus C."
    },
    page13: {
        header: "Which bus is more crowded?",
        feedback_correct: "Bus D has lesser space as compared to Bus C. So, it is more crowded.",
        feedback_incorrect: "Both buses have the same number of kids standing, still there is more space to stand in Bus C.",
        bottomBar: "Tap ▸ to continue."
    },
    page14: {
        header: "Activity Complete!",
        summary_line1: "Sometimes we need more information than total number to compare quantities.",
        summary_line2: "To go over this idea again, tap 'Start Over'.",
        restart_button: "Start Over"
    }
};

// Multi-language support (English + Indonesian)
const lang = {
    en: AppText,
    id: {
        page1: {
            title: "Membandingkan Kuantitas",
            line1: "Informasi apa yang Anda perlukan untuk membandingkan kuantitas?",
            line2: "Mari kita lihat 'kepadatan' bus.",
            line3: "Klik 'Mulai' untuk menjelajah!",
            startButton: "Mulai"
        },
        page2: {
            topBar: "Tebak jawabannya dengan informasi yang diberikan.",
            question_line1: "Bus A memiliki 40 anak.",
            question_line2: "Bus B memiliki 30 anak.",
            main_question: "Bus manakah yang lebih padat?",
            options_title: "Pilih salah satu opsi.",
            option_A: "Bus A",
            option_B: "Bus B",
            bottomBar: "Ketuk tombol 'bus' yang menurut Anda benar."
        },
        page3: {
            header: "Anda tidak memiliki semua informasi yang Anda butuhkan.",
            busA_caption1: "Bus A dapat menampung 36 anak",
            busA_caption2: "dan 40 anak dikirim ke Bus A",
            busB_caption1: "Bus B dapat menampung 20 anak",
            busB_caption2: "dan 30 anak dikirim ke Bus B",
            concept: "Bus yang lebih padat bukan hanya tentang berapa banyak anak di dalam bus!",
            nextButton: "Berikutnya"
        },
        page4: {
            header: "Mari kita isi Bus A dan periksa.",
            busA_chip: "40 anak untuk 36 kursi",
            busB_chip: "30 anak untuk 20 kursi",
            fillButton: "Isi Bus A",
            bottomBar: "Ketuk 'Isi Bus A'."
        },
        page5: {
            header: "Bus A terisi! Sekarang, mari kita isi Bus B.",
            busA_chip: "40 anak untuk 36 kursi",
            standingLabel: "4 berdiri",
            busB_chip: "30 anak untuk 20 kursi",
            fillButton: "Isi Bus B",
            bottomBar: "Ketuk 'Isi Bus B'."
        },
        page6: {
            header: "Bus B terisi! Sekarang, bagaimana menurut Anda?",
            busA_chip: "40 anak untuk 36 kursi",
            busA_standing: "4 berdiri",
            busB_chip: "30 anak untuk 20 kursi",
            busB_standing: "10 berdiri",
            bottomBar: "Ketuk ▸ untuk melanjutkan."
        },
        page7: {
            header: "Dengan semua informasi ini, bus manakah yang lebih padat?",
            busA_chip: "40 anak untuk 36 kursi",
            busA_standing: "4 berdiri",
            busB_chip: "30 anak untuk 20 kursi",
            busB_standing: "10 berdiri",
            options_title: "Pilih salah satu opsi.",
            option_A: "Bus A",
            option_B: "Bus B",
            feedback_correct: "Bus B memiliki lebih sedikit ruang dibandingkan dengan Bus A. Jadi, lebih padat.",
            feedback_incorrect: "Bus A masih memiliki banyak ruang untuk berdiri.",
            bottomBar: "Ketuk ▸ untuk melanjutkan.",
            correctOption: "B"
        },
        page8: {
            header: "Mari kita lihat dua bus lainnya.",
            busC_caption1: "Bus C dapat menampung 45 anak",
            busC_caption2: "dan 52 anak dikirim ke Bus C",
            busD_caption1: "Bus D dapat menampung 30 anak",
            busD_caption2: "dan 37 anak dikirim ke Bus D",
            concept: "Pikirkan jawabannya dalam hal anak-anak yang berdiri dan duduk.",
            nextButton: "Berikutnya"
        },
        page9: {
            header: "Tebakan yang bagus! Tapi, mari kita isi dan jelajahi.",
            busC_chip: "52 anak untuk 45 kursi",
            busD_chip: "37 anak untuk 30 kursi",
            fillButton: "Isi Bus C",
            bottomBar: "Ketuk 'Isi Bus C'."
        },
        page10: {
            header: "Bus C terisi! Sekarang, mari kita isi Bus D.",
            busC_chip: "52 anak untuk 45 kursi",
            standingLabelC: "7 berdiri",
            busD_chip: "37 anak untuk 30 kursi",
            fillButton: "Isi Bus D",
            bottomBar: "Ketuk 'Isi Bus D'."
        },
        page11: {
            header: "Bus C terisi! Sekarang, mari kita isi Bus D.",
            busC_chip: "52 anak untuk 45 kursi",
            standingLabelC: "7 berdiri",
            busD_chip: "37 anak untuk 30 kursi",
            standingLabelD: "7 berdiri",
            bottomBar: "Ketuk ▸ untuk melanjutkan."
        },
        page12: {
            header: "Sekarang pikirkan, bus manakah yang lebih padat?",
            busC_chip: "52 anak untuk 45 kursi",
            busC_standing: "7 berdiri",
            busD_chip: "37 anak untuk 30 kursi",
            busD_standing: "7 berdiri",
            options_title: "Pilih salah satu opsi.",
            option_C: "Bus C",
            option_D: "Bus D",
            option_Equal: "Sama Padatnya",
            bottomBar: "Ketuk tombol 'bus' yang menurut Anda benar.",
            correctOption: "D",
            feedback_correct: "Bus D memiliki lebih sedikit ruang dibandingkan dengan Bus C. Jadi, lebih padat.",
            feedback_incorrect: "Kedua bus memiliki jumlah anak yang sama yang berdiri, masih ada lebih banyak ruang untuk berdiri di Bus C."
        },
        page13: {
            header: "Bus manakah yang lebih padat?",
            feedback_correct: "Bus D memiliki lebih sedikit ruang dibandingkan dengan Bus C. Jadi, lebih padat.",
            feedback_incorrect: "Kedua bus memiliki jumlah anak yang sama yang berdiri, masih ada lebih banyak ruang untuk berdiri di Bus C.",
            bottomBar: "Ketuk ▸ untuk melanjutkan."
        },
        page14: {
            header: "Aktivitas Selesai!",
            summary_line1: "Terkadang kita membutuhkan lebih banyak informasi daripada jumlah total untuk membandingkan kuantitas.",
            summary_line2: "Untuk mengulangi ide ini lagi, ketuk 'Mulai Ulang'.",
            restart_button: "Mulai Ulang"
        }
    }
};