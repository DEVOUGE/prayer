import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import pic from "../images/station03.jpg";
import IgboComponentForDisplayingAllStations from "../../navigatorComponents/IgboComponentForDisplayingAllStations";
import StyledStationsComponent from "../../styledStationsComponent";

export default function ThirdStationIgbo() {
  return (
    <StyledStationsComponent>
      <View style={styles.container}>
        <IgboComponentForDisplayingAllStations />
        <View style={styles.flexContainer}>
          <Text style={styles.heading}>NKWUSI NKE ATO: Jesu Adaa nke Mbu</Text>
          <Text style={styles.txt}>
            <Text style={styles.boldTxt}> Onye-ndu:</Text> Anyi esekpuoro gi
            Jesu na-enye gi ekele
          </Text>
          <Text style={styles.boldTxt}>Gbuonu otu ikpere n’ala za:</Text>
          <Text style={styles.txt}>
            <Text style={styles.boldTxt}>Oha:</Text> Maka na obe gi di aso ka I
            Ji we gbaputa uwa.
          </Text>
          <Image
            source={pic}
            className="self-center w-full bg-blend-color-burn rounded-sm"
          />
          <Text style={styles.centerTxt}>kulitenu</Text>
          <Text style={styles.txt}>
            NDI nkem, kedu ihe m mere unu? Kedu kwanu ihe mji megide unu? Zanu
            m! Eduru m unu ogu afo abuo dufee n’ ozara. Eji m achicha nke eligwe
            zuo unu; dubata unu n’‘ala’ nke juputara na mmiri ara na mmanu-anu.
            Ma unu ejila obe kwuo Onyenzoputa unu ugwo. (Maika 6:5, Akwa ariri)
          </Text>
          <Text style={[styles.boldTxt, styles.txt]}>Sekpurunu Ala</Text>
          <Text style={styles.txt}>
            Mao bu oru anyi ka o bu; burukwa ahuhu anyi kao na-edi. Ma anyi
            chere na o bu nwa-onye uwa ojoo, nwa-onye Chukwu megburu emegbu.
            (Azaya m obu Isaiah 535)
          </Text>
          <Text style={styles.txt}>
            Chineke m, nye m amara gi n’uju ka m were obi ocha na obi anuri buru
            obe m ubochl nile wee na-eso gi.
          </Text>
          <Text style={[styles.txt]}>
            <Text style={styles.boldTxt}>Oha: </Text>
            Jesu m, ahuru m gi n’anya karichaa ihe nile; Ejim obi m nile
            chegharia na mmehie m mehiere gi. Ekwela kam kewapu onwe m ozo n’ebe
            ino Mee ka m hu gi n’anya mgbe o bula; Bia jim mee ihe o bula masiri
            gi.
          </Text>
          <Text style={styles.txt}>
            <Text style={styles.boldTxt}>Kulitenu </Text>
            kwere ukwe a gaa na nkwusi nke Ano.
          </Text>
          <View style={styles.songCont}>
            <Text style={[styles.txt, styles.song]}>
              <Text style={styles.boldTxt}>Ukwe: </Text>
              Unu ndi nke no n’ahuhu;
            </Text>
            <Text style={[styles.txt, styles.song]}>
              Unu nile nke ibu na-anyi;
            </Text>
            <Text style={[styles.txt, styles.song]}>
              Bia ka unu nwetaike (Matiu 11:28)
            </Text>
          </View>
        </View>
        <StatusBar translucent={true} />
        <IgboComponentForDisplayingAllStations />
      </View>
    </StyledStationsComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 10 : 0,
    marginHorizontal: 12,
    marginBottom: 33,
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
    fontWeight: "700",
    fontStyle: "italic",
  },
  txt: {
    fontSize: 17,
    lineHeight: 25,
  },
  songCont: {
    display: "flex",
    flexDirection: "column",
  },
  song: {
    color: "purple",
  },
});
