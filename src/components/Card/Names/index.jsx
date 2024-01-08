import { useState } from "react";
import style from "./style.module.scss";

export const Names = ({ isOpen }) => {
    const [randomNum, setRandomNum] = useState(0);
    const [noDisplay, setNoDisplay] = useState(true);

    const generateNumber = Math.floor(Math.random() * 51);

    const handleClick = () => {
        setRandomNum(generateNumber);

        setNoDisplay(false);

    }

    console.log(randomNum)

    return (
        <>
            {isOpen ? <ul>
                <div className={style.grid}>
                    <li id="1" className={style.vendido}  >Amanda<span>1</span></li>
                    <li id="2" className={style.vendido} >Bruno<span>2</span></li>
                    <li id="3" className={style.vendido} >Cássio<span>3</span></li>
                    <li id="4" className={style.vendido} >Davidson<span>4</span></li>
                    <li id="5" className={style.vendido} >Eustáquio<span>5</span></li>
                    <li id="6" className={style.vendido} >Felipe<span>6</span></li>
                    <li id="7" className={style.vendido} >Gustavo<span>7</span></li>
                    <li id="8" className={style.vendido} >Natã<span>8</span></li>
                    <li id="9" className={style.vendido}> <span>9</span>Ícaro</li>
                    <li id="10" ><span>10</span>Jonas</li>
                    <li id="11" className={style.vendido} ><span>11</span>Luis</li>
                    <li id="12" className={style.vendido} ><span>12</span>Marcos</li>
                    <li id="13" className={style.vendido} ><span>13</span>Natália</li>
                    <li id="14" ><span>14</span>Walisson</li>
                    <li id="15" className={style.vendido} ><span>15</span>Pedro</li>
                    <li id="16" className={style.vendido} ><span>16</span>Theo</li>
                    <li id="17" className={style.vendido} ><span>17</span>Rosana</li>
                    <li id="18" className={style.vendido} ><span>18</span>Stéphany</li>
                    <li id="19" className={style.vendido} ><span>19</span>Tiago</li>
                    <li id="20" className={style.vendido} ><span>20</span>Camila</li>
                    <li id="21" className={style.vendido} ><span>21</span>Victor</li>
                    <li id="22" className={style.vendido} ><span>22</span>Wadson</li>
                    <li id="23" className={style.vendido} ><span>23</span>Aline</li>
                    <li id="24" className={style.vendido} ><span>24</span>Bernardo</li>
                    <li id="25" className={style.vendido} ><span>25</span>Rosulina</li>
                    <li id="26" className={style.vendido} ><span>26</span>Alexandre</li>
                    <li id="27" className={style.vendido} ><span>27</span>Lucas</li>
                    <li id="28" ><span>28</span>Fernanda</li>
                    <li id="29" className={style.vendido} ><span>29</span>Abílio</li>
                    <li id="30" className={style.vendido} ><span>30</span>Erasmo</li>
                    <li id="31" className={style.vendido} ><span>31</span>André</li>
                    <li id="32" className={style.vendido} ><span>32</span>Marina</li>
                    <li id="33" className={style.vendido} ><span>33</span>Éric</li>
                    <li id="34" className={style.vendido} ><span>34</span>Marcelo</li>
                    <li id="35" className={style.vendido} ><span>35</span>Carlos</li>
                    <li id="36" ><span>36</span>Luciano</li>
                    <li id="37" className={style.vendido} ><span>37</span>Laura</li>
                    <li id="38" className={style.vendido} ><span>38</span>Danusa</li>
                    <li id="39" className={style.vendido} ><span>39</span>Íris</li>
                    <li id="40" className={style.vendido} ><span>40</span>Denise</li>
                    <li id="41" className={style.vendido} ><span>41</span>Sara</li>
                    <li id="42" className={style.vendido} ><span>42</span>Júlio</li>
                    <li id="43" className={style.vendido} ><span>43</span>Eduardo</li>
                    <li id="44" className={style.vendido} ><span>44</span>Maíra</li>
                    <li id="42" className={style.vendido} ><span>45</span>Melissa</li>
                    <li id="46" className={style.vendido} ><span>46</span>Alana</li>
                    <li id="47" className={style.vendido} ><span>47</span>Ana</li>
                    <li id="48" className={style.vendido} ><span>48</span>Desireé</li>
                    <li id="49" className={style.vendido} ><span>49</span>Diego</li>
                    <li id="50" className={style.vendido} ><span>50</span>Priscila</li>
                </div>

            </ul>
                : null}

        </>
    )
}