import { useState } from "react";
import { Names } from "./Names";
import style from "./style.module.scss";
import { FaCheck } from "react-icons/fa6";

export const Card = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openTable = () => {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true)
        }
    }

    return (
        <section className={style.container}>
            <div className={style.divBox}>
                <div className={style.img}>

                </div>

                <div className={style.title}>
                    <h1>Echo Dot 5ª Geração</h1>
                </div>

                <div className={style.text}>
                    <h2> O que você precisa saber sobre esta bolinha?</h2>
                    <ul>
                        <li>
                            <FaCheck />
                            <p>

                                Echo Dot é um dos dispositivos que possui a Alexa integrada, sendo uma caixa de som inteligente que pode se conectar com outros aparelhos e serviços;
                            </p>
                        </li>
                        <li>
                            <FaCheck />
                            <p>

                                Echo Dot 5ª geração é o modelo mais recente deste produto;
                            </p>
                        </li>
                        <li>
                            <FaCheck />
                            <p>

                                É o Echo Dot com o melhor som já lançado, com vocais mais nítidos, graves mais potentes e um som vibrante;
                            </p>
                        </li>
                        <li>
                            <FaCheck />
                            <p>

                                Possui sensores de temperatura e movimento, que facilitam a criação de rotinas para controlar dispositivos de casa inteligente compatíveis por voz ou por gestos;
                            </p>
                        </li>
                        <li>
                            <FaCheck />
                            <p>

                                Dimensões: 100 mm x 100 mm x 89 mm;
                            </p>
                        </li>
                        <li>
                            <FaCheck />
                            <p>

                                Áudio: 1 alto-falante de 1,73” com direcionamento frontal, alta definição sem perdas;
                            </p>
                        </li>
                        <li>
                            <FaCheck />
                            <p>

                                Disponível na cor Preta ou Branca (você escolhe a cor do seu prêmio).
                            </p>
                        </li>

                    </ul>

                    <h2>Como participar </h2>
                    
                    <p>
                        Para concorrer, basta comprar um bilhete da rifa, por apenas R$ 20,00 (vinte reais), escolher o nome na cartela e lançar a sorte. 🤞🍀
                    </p>
                    <p>
                        O sorteio será realizado no dia 31 de dezembro (de 2023, né), às 20h, pelo  <a href="https://chat.whatsapp.com/HjatC6gXBxOCVRhgPVpFNI" target="_blank">Grupo de WhatsApp.</a>
                    </p>

                </div>

                <Names isOpen={isOpen} />

                <button onClick={openTable}>Participar</button>
            </div>
        </section>
    )
}