$(document).ready(function() {
            // Activate the Carousel, but pause it from the start
            $("#next_prev").carousel("pause");

            // Go to the second item
            $("#myBtn").click(function() {
                $("#next_prev").carousel("prev");
            });

            // Go to the third item
            $("#myBtn2").click(function() {
                $("#next_prev").carousel("next");
            });

        });

        //Mudar as letras do botão "P","F" ou "-"

        function funcao_chamada(id) {
            var x = document.getElementById(id);
            if (x.innerHTML == "-") {
                x.innerHTML = "P";
            } else if (x.innerHTML === "P") {
                x.innerHTML = "F";
            } else if (x.innerHTML === "F") {
                x.innerHTML = "  ";
            } else {
                x.innerHTML = "-";
            }
        }

        function abrirMateria(evt, materias, mudarNome) {
            var i, conteudoaba, botoes;
            conteudoaba = document.getElementsByClassName("container carousel-inner");
            for (i = 0; i < conteudoaba.length; i++) {
                conteudoaba[i].style.display = "none";
            }
            botoes = document.getElementsByName("disciplina");
            for (i = 0; i < botoes.length; i++) {
                botoes[i].className = botoes[i].className.replace(" active", "");
            }
            document.getElementById(materias).style.display = "block";
            evt.currentTarget.className += " active";
            document.getElementsByTagName("h4")[0].innerHTML = mudarNome;