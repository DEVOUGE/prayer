import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import pic from "../images/station02.jpg";
import IgboComponentForDisplayingAllStations from "../../navigatorComponents/IgboComponentForDisplayingAllStations";
import StyledStationsComponent from "../../styledStationsComponent";

export default function SecondStationIgbo() {
  return (
    <StyledStationsComponent>
      <View style={styles.container}>
        <IgboComponentForDisplayingAllStations />
        <View style={styles.flexContainer}>
          <Text style={styles.heading}>NKWUSI NKE ABUO: Jesu Eburu Obe Ya</Text>
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
            KAIFAS eziga Jesu na nke Pailet, onye lechara ya Kwuputa si: “O
            nweghi ihe ojoo o bula m huru nwoke a mere" Pailet ezigara ya Herod.
            Herod ajuchaa ya ajuju zighachiere ya Pailet. Pailet na Herod eji ya
            meziri esemokwu di n’ agbata ha abuo. Pailet abia ma Jesu ikpe onwu.
            (Luk 23:1.4.1-12)
          </Text>
          <Text style={[styles.boldTxt, styles.txt]}>Sekpurunu Ala</Text>
          <Text style={styles.txt}>
            Gini kpatara umu-mba ji aro iro? Kedu ihe ha ji aro iro na-enweghi
            isi? Ndi eze uwa adukotala ukwu gbaa izu ha ji emegide Dinwenu
            Onye-O-Tere Ude. Obinigwe no na-achi ha ochi. Oseburuwa achi gbuola
            ha n’ochi.
          </Text>
          <Text style={styles.txt}>
            Onye nweanyi, mee Ka anyi Kwuru n’uzo ezi okwu gi mgbe nile, ghara
            iji egwu ndi mmadu emehie gi. Mee ka ndi na-achi obodo tinyere Nzuko
            gi aka n’oru igbasa ikpe nkwumoto gi.
          </Text>
          <Text style={[styles.txt]}>
            <Text style={styles.boldTxt}>Oha: </Text>
            Jesu m, ahuru m gi n’anya karichaa ihe-nile; Ejim obi m nile
            chegharia na mmehie m mehiere gi. E kwela ka m Kewapu onwe m ozo n’
            ebe ino Mee kam hu gi n’anya mabe o bula; Bia jim mee ihe o bula
            masiri gi.
          </Text>
          <Text style={styles.txt}>
            <Text style={styles.boldTxt}>Kulitenu </Text>
            kwere ukwe a gaa na nkwusi nke ato.
          </Text>
          <View style={styles.songCont}>
            <Text style={[styles.txt, styles.song]}>
              <Text style={styles.boldTxt}>Ukwe: </Text>
              Anya-mmiri aburula nrim
            </Text>
            <Text style={[styles.txt, styles.song]}>
              Ma n’ehihie ma n‘abali;
            </Text>
            <Text style={[styles.txt, styles.song]}>
              Mmadu si; "Olee Chukwu gi (Abuoma2:3)
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
