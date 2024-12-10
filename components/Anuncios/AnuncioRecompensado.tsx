import React, { useEffect, useState } from 'react';
import { RewardedInterstitialAd, AdEventType, RewardedAdEventType, TestIds } from 'react-native-google-mobile-ads';

interface RewardedInterstitialProps {
  onRewardEarned: (reward: { type: string; amount: number }) => void; // Callback para manejar la recompensa
}

const RewardedInterstitialAdComponent: React.FC<RewardedInterstitialProps> = ({ onRewardEarned }) => {
  const adUnitId = __DEV__ ? TestIds.REWARDED_INTERSTITIAL : 'ca-app-pub-6921150380725872/2210160162';
  const rewardedInterstitial = RewardedInterstitialAd.createForAdRequest(adUnitId);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    // Evento cuando el anuncio está cargado
    const onAdLoaded = () => setLoaded(true);
    const onAdFailedToLoad = (error: any) => console.error('Ad failed to load: ', error);

    // Evento cuando el usuario gana la recompensa
    const onUserEarnedReward = (reward: { type: string; amount: number }) => {
      console.log('Reward earned: ', reward);
      onRewardEarned(reward); // Callback al padre
    };

    // Suscribir a eventos del anuncio
    const unsubscribeLoaded = rewardedInterstitial.addAdEventListener(AdEventType.LOADED, onAdLoaded);
    const unsubscribeFailed = rewardedInterstitial.addAdEventListener(AdEventType.ERROR, onAdFailedToLoad);
    const unsubscribeRewarded = rewardedInterstitial.addAdEventListener(RewardedAdEventType.EARNED_REWARD, onUserEarnedReward);

    // Cargar el anuncio al iniciar el componente
    rewardedInterstitial.load();

    // Desuscribir eventos al desmontar
    return () => {
      unsubscribeLoaded();
      unsubscribeFailed();
      unsubscribeRewarded();
    };
  }, [rewardedInterstitial, onRewardEarned]);

  useEffect(() => {
    if (loaded) {
      rewardedInterstitial.show().catch((error) => console.error('Error showing ad: ', error));
    }
  }, [loaded, rewardedInterstitial]);

  return null;
};

export default RewardedInterstitialAdComponent;
