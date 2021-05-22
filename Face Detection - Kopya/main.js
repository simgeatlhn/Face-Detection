$(document).ready(function () { //ready document hazır olduğunda fonksiyonu çalıştırır

    $("#image").faceDetection({
        complete: function (faces) { //element üretilir faces dan gelen parametrelere göre yüzleri tanımlayacak çerçeve için
            for (let i = 0; i < faces.length; i++) { //for döngüsü fotoğraftaki tüm yüzleri algılamak için
                $("<div>", {
                    class: "face",
                    css: { //yüzlerin pozisyonları dinamik değişir css kodları da dinamik değişmeli bu yüzden bu kısma css kodları ekleriz
                        left: faces[i].x * faces[i].scaleX + "px", //scaleX resim ile çerçevenin orantılı olmasını sağlar-yüzle orantılı çerçeve için scaleX
                        top: faces[i].y * faces[i].scaleY + "px",
                        width: faces[i].width * faces[i].scaleX + "px",
                        height: faces[i].height * faces[i].scaleX + "px",
                    }
                }).insertAfter(this); //image den hemen sonra ekleneceği anlamına gelir-insertAfter methodu ile
            }
        },
        //tamamlama işlemi bittikten sonra-complete
        //faces parametresi ile tanımlamış olduğu yüzlerin pozisyonunu veriyor-console da

        error: function (code, message) {}
        //face detection da hata varsa bulur
    });
})