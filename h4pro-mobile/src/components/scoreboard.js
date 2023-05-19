import { COLOR } from '../constants/colors'
import { TEXT_EN } from '../constants/text';
import React, { useState, useContext } from 'react';
import styles from '../styles/main-page.style'
import { useTranslation } from 'react-i18next';
import { SafeAreaView, Text, Image } from 'react-native'
import { IMAGES } from '../constants/images'
import AuthContext from '../../AuthContext';

export const MyScoreBoard = () => {
    const [courtName, setCourtName] = useState('Norte Padel - 01');
    const [team1Score, setTeam1Score] = useState(15);
    const [team2Score, setTeam2Score] = useState(21);
    const [team1SetPoints, setTeam1SetPoints] = useState(2);
    const [team2SetPoints, setTeam2SetPoints] = useState(0);
    const { t } = useTranslation();
    const { token, setToken } = useContext(AuthContext);

    const updateScore = (team, points) => {
        if (team === 1) {
            setTeam1Score(points);
        }
        else {
            setTeam2Score(points)
        }
    }

    const updateSetScore = (team, points) => {
        if (team === 1) {
            setTeam1SetPoints(points);
        }
        else {
            setTeam2SetPoints(points)
        }
    }

    Number.prototype.pad = function (n) {
        if (n == undefined)
            n = 2;

        return (new Array(n).join('0') + this).slice(-n);
    }

    return (
        <SafeAreaView style={[styles.scoreboard, styles.basicButton]}>
            {token !== "" ? (
                <>
                    <SafeAreaView style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                        <Text style={styles.scoreboardText}>
                            {t("Playing at") + " "}
                            <Text style={[styles.scoreboardText, { color: COLOR.blue }]}>
                                {token}
                            </Text>
                        </Text>

                        {/* <Text style={[styles.scoreboardText, { color: COLOR.blue}]}>{token}</Text> */}
                    </SafeAreaView>
                    <SafeAreaView style={{ flexDirection: 'row' }}>
                        <Text style={[styles.scoreboardScores, { color: COLOR.blue }]}>{team1Score.pad(2)}</Text>
                        <Text style={[styles.scoreboardScores]}> - </Text>
                        <Text style={[styles.scoreboardScores, { color: COLOR.orange }]}>{team2Score.pad(2)}</Text>
                    </SafeAreaView>
                    <SafeAreaView style={{ flexDirection: 'row', width: '52%', left: '11%' }}>
                        <Text style={[styles.scoreboardSetScore, { color: COLOR.blue, flex: 1 }]}>{team1SetPoints.pad(2)}</Text>
                        <Text style={[styles.scoreboardSetScore, { color: COLOR.orange, flex: 1 }]}>{team2SetPoints.pad(2)}</Text>
                    </SafeAreaView>
                </>
            ) : (
                <Image style={{ width: 120, height: 130 }} source={IMAGES.no_court} />
            )}

        </SafeAreaView>
    );
};
