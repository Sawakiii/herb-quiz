import React from "react"
import QuizGenerator from "../QuizGenerator"

const Section2 = (props) =>{
    const quizesOne = [
        "ハーブティーが生まれたのは{4大文明}から。",
        "4大文明とは、{インダス、エジプト、メソポタミア、中国(黄河))}",
        "東洋のティーは、{作法や習慣}を変え、{政治的}にも使われた。",
        "西洋のハーブティーは、{医療品開発の基礎}に始まり、十字軍や中世時代には{スパイス的な感じ}になり、嗜好品化していった。",
        "ティーとは、{植物をそのまま、もしくは乾燥されて、お湯で煎じて飲む}飲み物。",
        "{ツバキ科}のチャノキは、{紅茶・緑茶・ウーロン茶}の原料です。{カフェイン}含有しています。",
        "ティーは、{シルクロード}からヨーロッパ、世界中に伝わりました。"
    ]
    const quizesTwo = [
        "紀元前では、{アーユルヴェーダ}や{インダス}に、薬草についての研究が始まっていた。",
        "古代エジプト時代の{パピルス}には、医療用の{ペパーミント、バジル、サフラン}や、{没薬}、{乳香}の記録が残っている。",
        "ティーの祖とされるのは、{神農}で、ハーブティーの祖は{ヒポクラテス}。",
        "ハーブ研究が停滞したのは、{395年のローマ帝国滅亡}以降のことである。",
        "なぜ停滞したかというと、{キリスト教}が台頭したせい。",
        "キリスト教では、病気={神からの戒め}であり、魔術={医学}だった。",
        "迫害は{8世紀から数百年}ほど続いた。多くの薬草使いが魔女狩りに遭う。",
        "ローマ法王の命令で一応は一部の修道院で研究が進んだ。",
        "この時ハーブを煎じたものを{インフーゾ}と呼んだ。薬草酒も多く作られていった。",
        "中世では、ハーブは{スパイスが富の象徴}だったがハーブティーは{薬でしかなかった}。なぜ体にいいかの研究が進んだ中世。"

    ]
    const quizesThree = [
        "中世は、{5-15}世紀",
        "{11世紀の十字軍遠征}によって、ヨーロッパ以外の交易路が開拓された。",
        "港に商人が集まり、都市貴族が生まれ、東洋のハーブやスパイスを食した。当時はそれが{富の象徴}だった。",
        "中世ヨーロッパでは、飲料は{アルコール}だった。当時はぶどう酒が武士でビールが農民のものだった。",
        "ぶどう酒に{薬味}を入れるのが普通だった。コーヒー的なのが、{グリューヴァイン(ぶどう酒、薬草、砂糖)}だった。",
        "中世に使われたハーブは、{ショウガ、シナモン、クローブ、コショウ、ナツメグ}等。",
    ]
    const quizesFour = [
        "チャノキから作るティーは、{紀元前2700年}頃に{神農}が発見し、{解毒剤や薬}として使った。",
        "神農の時代の頃はティーを{モグモグ食べていた。}",
        "唐の時代({7-10世紀始め})は、茶が文化的になった。特に、{陸羽}という人がマーケティングした。",
        "日本では、{平安時代(784-1192)}に{最澄、空海、永忠}が中国からタネ持ってきた。それが日本初の茶",
        "鎌倉時代に、{臨済宗の栄西}が茶の栽培を始めた。",
        "栄西は、日本初の{茶の本}を書いて、{茶ってすごい健康にいいね}と書いた。",
        "鎌倉時代後期({1300年前後})には、{闘茶}が生まれて、文化になっていった。",
        "室町時代には、{茶の湯(茶道)}が誕生。",
        "千利休によって{侘茶}の文化も誕生。",
        "茶という概念は、西洋も東洋も、16-17世紀以降には、茶の{効果}よりも{文化性・嗜好性}に重きが置かれるようになっていく。"
    ]
    const quizesFive = [
        "11世紀から行われていた{十字軍遠征}によって世界中のハーブが{ヨーロッパ}に来た。",
        "中世が終わる{15}世紀にはハーブを求めアフリカ、アジア、{アメリカ}へ行った。これが{大航海時代}",
        "この時代のハーブやスパイスは、{王侯貴族}の{嗜好品}としてとても貴重だった。",
        "東洋の特産ハーブは、{チャノキの葉から作るティー(茶)}だった。",
        "この頃には、{マカオ}や日本、中国では、{味や香り}を楽しむ茶の楽しみ方が広まっていた。",
        "ヨーロッパと茶の出会いもこの頃。きっかけは、{マカオ}にいた{ポルトガル人}と言われている。",
        "ヨーロッパで茶が流行したのは、東洋は{神秘の国で高度な文明を持っている}と考えられていたので、貴族に文化が広まった",
        "嗜好品としてのお茶がヨーロッパに広まったのは、{17世紀}のこと。{オランダ}が中国茶の{緑茶}を広め{万病に効く東洋の秘薬}と考えられた。",
        "{16世紀の宗教改革}によって、ハーブの知識が庶民にも伝わるようになった。ハーブのノウハウが広まった。"
    ]
    const quizesSix = [
        "{西洋の薬草}として生まれたハーブティーが、{医薬品の台頭}と共に価値が薄れていく中で、{東南アジア・中国}で生まれた茶葉が、{嗜好品・文化}としてアジアで根付き発展した。",
        "新大陸時代({15世紀あたり})を通して、西洋ハーブと{緑茶・紅茶}が出会う。",
        "東洋医学のような伝統的な自然療法がみなおされ、ハーブティーが注目されている。",
        "ハーブティーの魅力は、薬草や健康茶にとどまらず、香りや味、色も注目。",
        "ブレンドを楽しむ、{チャノキ}と混ぜる、{フレーバーティー}や{ペアリング・マリアージュ}なども注目されている。"
    ]

    return (
        <>
            <h1>ここは第2章についてです。</h1>
            <hr></hr>
            <h2 style={{margin: "30px 0"}}>茶の歴史の概観</h2>
            {
                quizesOne.map((quiz)=>(
                    <QuizGenerator quiz={quiz}></QuizGenerator>
                ))
            }
            <h2 style={{margin: "30px 0"}}>ハーブの始まりから薬学としての発展</h2>
            {
                quizesTwo.map((quiz)=>(
                    <QuizGenerator quiz={quiz}></QuizGenerator>
                ))
            }
            <h2 style={{margin: "30px 0"}}>中世、商人の台頭から都市貴族の出現まで。</h2>
            {
                quizesThree.map((quiz)=>(
                    <QuizGenerator quiz={quiz}></QuizGenerator>
                ))
            }
            <h2 style={{margin: "30px 0"}}>東洋のティー文化の発展</h2>
            {
                quizesFour.map((quiz)=>(
                    <QuizGenerator quiz={quiz}></QuizGenerator>
                ))
            }
            <h2 style={{margin: "30px 0"}}>大航海時代から新大陸へ</h2>
            {
                quizesFive.map((quiz)=>(
                    <QuizGenerator quiz={quiz}></QuizGenerator>
                ))
            }
            <h2 style={{margin: "30px 0"}}>ハーブの歴史のまとめ</h2>
            {
                quizesSix.map((quiz)=>(
                    <QuizGenerator quiz={quiz}></QuizGenerator>
                ))
            }

        </>
    )
}


export default Section2