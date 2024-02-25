import {
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import pic from "../images/station01.jpg";
import IgboComponentForDisplayingAllStations from "../../navigatorComponents/IgboComponentForDisplayingAllStations";
import TopBarComponent from "../header/TopBarComponent";

export default function FirstStationIgbo() {
  return (
    <View className="pt-6">
      <ScrollView>
        <TopBarComponent shouldDisplayDropdownComponent={"no"} />
        <View style={styles.container}>
          <IgboComponentForDisplayingAllStations />
          <View style={styles.flexContainer}>
            <Text style={styles.heading}>
              NKWUSI NKE MBU: A MAA JESU IKPE ONWU
            </Text>
            <Text style={styles.txt}>
              <Text style={styles.boldTxt}> Onye-ndu:</Text> Anyi esekpuoro gi
              Jesu na-enye gi ekele
            </Text>
            <Text style={styles.boldTxt}>Gbuonu otu ikpere n’ala za:</Text>
            <Text style={styles.txt}>
              <Text style={styles.boldTxt}>Oha:</Text> Maka na obe gi di aso ka
              I Ji we gbaputa uwa.
            </Text>
            <Image
              source={pic}
              className="self-center w-full bg-blend-color-burn rounded-sm"
            />
            <Text style={styles.centerTxt}>kulitenu</Text>
            <Text style={styles.txt}>
              KAIFAS asi Jesu: "Ejim aha Chukwu di ndu asi gi nuora anyi iyi ma
              i bu Kristi, Nwa nke Chukwu. "Jesu azaa ya: "Ikwuola ya. Mana ana
              m agwa gi na e mechaa, iga-ahu Nwa nke Madu ka O no n’aka -nri nke
              Ike, si n’urukpu nke igwe na-abia, " Kaifas adowaa uwe nru-ala ya
              tie mkpu si: "OKwuola aru! Ndi mmadu ekwughachi si: "Kpogbuo ya
              Kpoghuo ya" Ha bido buwa ya asu n’‘ihu; kuwa ya ihe.
            </Text>
            <Text style={[styles.boldTxt, styles.txt]}>Sekpurunu Ala</Text>
            <Text style={styles.txt}>
              Ndi iro m na-emeghi ihe ojoo obula siri oke ike. Ndi Kporo m asi
              na nkiti akariala; ndi iro m ji ihe ojoo akwu m ugwo ihe oma, maka
              na ana m eso uzo ezi omume. (Abuoma 38: 19-20)
            </Text>
            <Text style={styles.txt}>
              Onyenwe m, nye m ndidi ka m ghara ikwuhie onu mqbe ihe na-esiri m
              ike. E kwela ka ikwu na ibe ko m. Nye m obi siri ike, nke m ga-eji
              emeri onwunwa nile ga-abiakwute m na ndum.
            </Text>
            <Text style={[styles.txt]}>
              <Text style={styles.boldTxt}>Oha: </Text>
              Jesu m, ahuru m gi n’anya Karichaa ihe nile Ejim obim nile
              chegharia na mehie m mehiere Gi E kwela ka m Kewapu onwe m ozo
              n’ebe ino Mee ka m hu gi n’anya mgbe o bula; Bia jim mee ihe o
              bula masiri gi.
            </Text>
            <Text style={styles.txt}>
              A choo na nkwusi o bula e nwere ike Ikpe: Nna anyi no
              n’ligwe........ Ekele Maria...... Otito diri Nna... Jesu a kpodoro
              n’obe maka nihi anyi Meere anyi ebere; ka mkpuru obi ndi nile
              Kwerenu gara aga....... Ma a choghi, e nwere ike ihapu ekpere
              ndia.
            </Text>
            <Text style={styles.txt}>
              <Text style={styles.boldTxt}>Kulitenu </Text>
              kwere ukwe a gaa na nkwusi nke abua.
            </Text>
            <View style={styles.songCont}>
              <Text style={[styles.txt, styles.song]}>
                <Text style={styles.boldTxt}>Ukwe: </Text>
                Nsogbu norom n’ebe nile:
              </Text>
              <Text style={[styles.txt, styles.song]}>
                Anuru m ndi na-agba izu:‘
              </Text>
            </View>
          </View>
          <StatusBar translucent={true} />
          <IgboComponentForDisplayingAllStations />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 45 : 0,
    marginHorizontal: 12,
    marginBottom: 4,
  },
  flexContainer: {
    display: "flex",
    rowGap: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  heading: {
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    color: "red",
  },
  boldTxt: {
    fontWeight: "900",
  },
  centerTxt: {
    textAlign: "center",
    // fontSize: 20,
    fontWeight: "700",
    fontStyle: "italic",
  },
  txt: {
    fontSize: 17,
    lineHeight: 24,
  },
  songCont: {
    display: "flex",
    flexDirection: "column",
  },
  song: {
    color: "purple",
  },
});
