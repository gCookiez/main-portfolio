import { fetchContent } from '../api';
export const imageList = [
    "https://en-portal.g.kuroco-img.app/v=1744884538/files/user/character/specialweek/specialweek_list.png",
    "https://en-portal.g.kuroco-img.app/v=1744884593/files/user/character/silencesuzuka/silencesuzuka_list.png",
    "https://en-portal.g.kuroco-img.app/v=1744884573/files/user/character/tokaiteio/tokaiteio_list.png",
    "https://en-portal.g.kuroco-img.app/v=1744885689/files/user/character/maruzensky/maruzensky_list.png",
    "https://en-portal.g.kuroco-img.app/v=1744944239/files/user/character/fujikiseki/fujikiseki_list.png",
    "https://en-portal.g.kuroco-img.app/v=1744944401/files/user/character/oguricap/oguricap_list.png",
    "https://en-portal.g.kuroco-img.app/v=1744944608/files/user/character/goldship/goldship_list.png",
    "https://en-portal.g.kuroco-img.app/v=1744944761/files/user/character/vodka/vodka_list.png",
    "https://en-portal.g.kuroco-img.app/v=1744944627/files/user/character/daiwascarlet/daiwascarlet_list.png",
    "https://en-portal.g.kuroco-img.app/v=1744944734/files/user/character/taikishuttle/taikishuttle_list.png",
    "https://en-portal.g.kuroco-img.app/v=1744944665/files/user/character/grasswonder/grasswonder_list.png",
    "https://en-portal.g.kuroco-img.app/v=1744944689/files/user/character/hishiamazon/hishiamazon_list.png",
    "https://en-portal.g.kuroco-img.app/v=1744944706/files/user/character/mejiromcqueen/mejiromcqueen_list.png",
    "https://en-portal.g.kuroco-img.app/v=1744944639/files/user/character/elcondorpasa/elcondorpasa_list.png",
    "https://en-portal.g.kuroco-img.app/v=1744944743/files/user/character/tmoperao/tmoperao_list.png",
    "https://en-portal.g.kuroco-img.app/v=1747380993/files/user/character/naritabrian/naritabrian_list.png",
    "https://en-portal.g.kuroco-img.app/v=1749109386/files/user/character/symbolirudolf/symbolirudolf_list.png",
    "https://en-portal.g.kuroco-img.app/v=1749189959/files/user/character/airgroove/airgroove_list.png",
    "https://en-portal.g.kuroco-img.app/v=1750748368/files/user/character/agnesdigital/agnesdigital_list.png",
    "https://en-portal.g.kuroco-img.app/v=1750748751/files/user/character/seiunsky/seiunsky_list.png",
    "https://en-portal.g.kuroco-img.app/v=1750748798/files/user/character/tamamocross/tamamocross_list.png",
    "https://en-portal.g.kuroco-img.app/v=1750748854/files/user/character/finemotion/finemotion_list.png",
    "https://en-portal.g.kuroco-img.app/v=1750748905/files/user/character/biwahayahide/biwahayahide_list.png",
    "https://en-portal.g.kuroco-img.app/v=1749211433/files/user/character/mayanotopgun/mayanotopgun_list.png",
    "https://en-portal.g.kuroco-img.app/v=1750749084/files/user/character/manhattancafe/manhattancafe_list.png",
    "https://en-portal.g.kuroco-img.app/v=1750749149/files/user/character/mihonobourbon/mihonobourbon_list.png",
    "https://en-portal.g.kuroco-img.app/v=1749211633/files/user/character/mejiroryan/mejiroryan_list.png",
    "https://en-portal.g.kuroco-img.app/v=1750749492/files/user/character/hishiakebono/hishiakebono_list.png",
    "https://en-portal.g.kuroco-img.app/v=1750749549/files/user/character/yukinobijin/yukinobijin_list.png",
    "https://en-portal.g.kuroco-img.app/v=1749211656/files/user/character/riceshower/riceshower_01_list.png",
    "https://en-portal.g.kuroco-img.app/v=1750749602/files/user/character/inesfujin/inesfujin_list.png",
    "https://en-portal.g.kuroco-img.app/v=1749211670/files/user/character/agnestachyon/agnestachyon_list.png",
    "https://en-portal.g.kuroco-img.app/v=1749211687/files/user/character/winningticket/winningticket_list.png",
    "https://en-portal.g.kuroco-img.app/v=1750749726/files/user/character/airshakur/airshakur_list.png",
    "https://en-portal.g.kuroco-img.app/v=1750749830/files/user/character/eishinflash/eishinflash_list.png",
    "https://en-portal.g.kuroco-img.app/v=1751255308/files/user/character/currenchan/currenchan_list.png",
    "https://en-portal.g.kuroco-img.app/v=1752477882/files/user/character/kawakamiprincess/kawakamiprincess_list.png",
    "https://en-portal.g.kuroco-img.app/v=1750749900/files/user/character/goldcity/goldcity_list.png",
    "https://en-portal.g.kuroco-img.app/v=1749211708/files/user/character/sakurabakushino/sakurabakushino_list.png",
    "https://en-portal.g.kuroco-img.app/v=1751255526/files/user/character/seekingthepearl/seekingthepearl_list.png",
    "https://en-portal.g.kuroco-img.app/v=1753843324/files/user/character/shinkowindy/shinkowindy_list.png",
    "https://en-portal.g.kuroco-img.app/v=1750750009/files/user/character/sweeptosho/sweeptosho_list.png",
    "https://en-portal.g.kuroco-img.app/v=1749211726/files/user/character/supercreek/supercreek_list.png",
    "https://en-portal.g.kuroco-img.app/v=1750750096/files/user/character/smartfalcon/smartfalcon_list.png",
    "https://en-portal.g.kuroco-img.app/v=1751255358/files/user/character/zennorobroy/zennorobroy_list.png",
    "https://en-portal.g.kuroco-img.app/v=1750750206/files/user/character/naritataishin/naritataishin_list.png",
    "https://en-portal.g.kuroco-img.app/v=1750750279/files/user/character/nishinoflower/nishinoflower_list.png",
    "https://en-portal.g.kuroco-img.app/v=1749211744/files/user/character/haruurara/haruurara_list.png",
    "https://en-portal.g.kuroco-img.app/v=1753843370/files/user/character/bamboomemory/bamboomemory_list.png",
    "https://en-portal.g.kuroco-img.app/v=1750750351/files/user/character/bikopegasus/bikopegasus_list.png",
    "https://en-portal.g.kuroco-img.app/v=1750750443/files/user/character/marveloussunday/marveloussunday_list.png",
    "https://en-portal.g.kuroco-img.app/v=1749211770/files/user/character/matikanefukukitaru/matikanefukukitaru_list.png",
    "https://en-portal.g.kuroco-img.app/v=1750750564/files/user/character/meishodoto/meishodoto_list.png",
    "https://en-portal.g.kuroco-img.app/v=1750750651/files/user/character/mejirodober/mejirodober_list.png",
    "https://en-portal.g.kuroco-img.app/v=1749211788/files/user/character/nicenature/nicenature_list.png",
    "https://en-portal.g.kuroco-img.app/v=1749211819/files/user/character/kinghalo/kinghalo_list.png",
    "https://en-portal.g.kuroco-img.app/v=1752477914/files/user/character/matikanetannhauser/matikanetannhauser_list.png",
    "https://en-portal.g.kuroco-img.app/v=1751255148/files/user/character/ikunodictus/ikunodictus_list.png",
    "https://en-portal.g.kuroco-img.app/v=1751255177/files/user/character/mejiropalmer/mejiropalmer_list.png",
    "https://en-portal.g.kuroco-img.app/v=1751254968/files/user/character/daitakuhelios/daitakuhelios_list.png",
    "https://en-portal.g.kuroco-img.app/v=1751255020/files/user/character/twinturbo/twinturbo_list.png",
    "https://en-portal.g.kuroco-img.app/v=1751255220/files/user/character/satonodiamond/satonodiamond_list.png",
    "https://en-portal.g.kuroco-img.app/v=1751255262/files/user/character/kitasanblack/kitasanblack_list.png",
    "https://en-portal.g.kuroco-img.app/v=1751263566/files/user/character/sakurachiyonoo/sakurachiyonoo_list.png",
    "https://en-portal.g.kuroco-img.app/v=1753843425/files/user/character/mejiroardan/mejiroardan_list.png",
    "https://en-portal.g.kuroco-img.app/v=1751255460/files/user/character/yaenomuteki/yaenomuteki_list.png",
    "https://en-portal.g.kuroco-img.app/v=1744275438/files/user/character/happymeek/happymik_list.png",
    "https://en-portal.g.kuroco-img.app/v=1744275457/files/user/character/hayakawatazuna/hayakawatazuna_list.png",
    "https://en-portal.g.kuroco-img.app/v=1750733979/files/user/character/akikawayayoi/akikawayayoi_list.png",
    "https://en-portal.g.kuroco-img.app/v=1750404335/files/user/character/otonashietsuko/otonashietsuko_list.png",
    "https://en-portal.g.kuroco-img.app/v=1750404741/files/user/character/kiryuinaoi/kiryuinaoi_list.png",
    "https://en-portal.g.kuroco-img.app/v=1750404940/files/user/character/anshinzawasasami/anshinzawasasami_list.png"
];

export const imgRandomizer = (): string => {
    const randomentry = Math.floor(Math.random() * (imageList.length - 1) + 1);
    console.log(imageList[randomentry]);
    return imageList[randomentry];
}


export const fetchRandomImage = async (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        const imgUrl = imgRandomizer();

        // const asciiOpts = {
        //     dither: false,
        //     invert: false,
        // };

        // const result = await braillefy(imgUrl, 50, asciiOpts);

        // resolve(result);
        const url = `${import.meta.env.VITE_ASCII_URL}&url=${imgUrl}&width=100&height=100`;
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const options = {
            method: "GET",
            headers: headers,
            redirect: 'follow'
        }

        const props = {
            url: url,
            options: options
        }

        fetchContent(props).then((data) => data.text())
        .then((result) => {
            resolve(result)
        })
        .catch((error) => {
            reject(error)
        })

    })
}




export * from '.';