//React
import { useState } from 'react';
import styled from 'styled-components/native';

//Components
import { COLOR } from 'constants/design';
import { SafeArea, ContainerTop } from 'components/Layout';
import { Text } from 'components/Text';
import { Image } from 'components/Image';

//Assets symptoms
import fluIcon from 'assets/icons/symptoms/flu.png';
import headacheIcon from 'assets/icons/symptoms/headache.png';
import highFeverIcon from 'assets/icons/symptoms/high-fever.png';
import stomachacheIcon from 'assets/icons/symptoms/stomachache.png';
import indigestionIcon from 'assets/icons/symptoms/indigestion.png';
import acheIcon from 'assets/icons/symptoms/ache.png';
import chillIcon from 'assets/icons/symptoms/chill.png';
import constipationIcon from 'assets/icons/symptoms/constipation.png';
import diarrheaIcon from 'assets/icons/symptoms/diarrhea.png';
import heartburnIcon from 'assets/icons/symptoms/heartburn.png';
import muscularPainIcon from 'assets/icons/symptoms/muscular-pain.png';
import arthralgiaIcon from 'assets/icons/symptoms/arthralgia.png';
//Assets medical-subjects
import internalMedicineIcon from 'assets/icons/medical-subjects/internal-medicine.png';
import otolaryngologyIcon from 'assets/icons/medical-subjects/otolaryngology.png';
import surgeryIcon from 'assets/icons/medical-subjects/surgery.png';
import dentistryIcon from 'assets/icons/medical-subjects/dentistry.png';
import pediatryIcon from 'assets/icons/medical-subjects/pediatry.png';
import gynecologyIcon from 'assets/icons/medical-subjects/gynecology.png';
import dermatologyIcon from 'assets/icons/medical-subjects/dermatology.png';
import ophthalmologyIcon from 'assets/icons/medical-subjects/ophthalmology.png';
import emergencyMedicineIcon from 'assets/icons/medical-subjects/emergency-medicine.png';
import familyMedicineIcon from 'assets/icons/medical-subjects/family-medicine.png';
import urologyIcon from 'assets/icons/medical-subjects/urology.png';
import psychiatryIcon from 'assets/icons/medical-subjects/psychiatry.png';
import orthopedicsIcon from 'assets/icons/medical-subjects/orthopedics.png';
import rehabilitationMedicineIcon from 'assets/icons/medical-subjects/rehabilitation-medicine.png';
import rheumatismIcon from 'assets/icons/medical-subjects/rheumatism.png';
import cardiologyIcon from 'assets/icons/medical-subjects/cardiology.png';
import laboratoryMedicineIcon from 'assets/icons/medical-subjects/laboratory-medicine.png';
import infectionMedicineIcon from 'assets/icons/medical-subjects/infection-medicine.png';

export default function CategoryScreen({ navigation }) {

  const [category, setCategory] = useState('symptoms');

  function Icon({ source, category, title }) {
    return (
      <IconButton
        underlayColor={COLOR.GRAY5}
        onPress={() => {
          navigation.navigate('Booking', { category: category, name: title });
        }}
      >
        <>
          <Image source={source} marginTop={8} width={60} height={60} />
          <Text T6>{title}</Text>
        </>
      </IconButton>
    )
  }

  return (
    <SafeArea>
      <ContainerTop paddingHorizontal={20} paddingVertical={36}>

        {category === 'symptoms' && (
          <ButtonsArea>
            <SellectedButton>
              <Text T5 medium color={COLOR.MAIN}>??????</Text>
            </SellectedButton>
            <UnsellectedButtonRight
              underlayColor='transparent'
              onPress={() => setCategory('subjects')}
            >
              <Text T5 color={COLOR.GRAY1}>?????????</Text>
            </UnsellectedButtonRight>
          </ButtonsArea>
        )}

        {category === 'subjects' && (
          <ButtonsArea>
            <UnsellectedButtonLeft
              underlayColor='transparent'
              onPress={() => setCategory('symptoms')}
            >
              <Text T5 color={COLOR.GRAY1}>??????</Text>
            </UnsellectedButtonLeft>
            <SellectedButton>
              <Text T5 medium color={COLOR.MAIN}>?????????</Text>
            </SellectedButton>
          </ButtonsArea>
        )}

        {category === 'symptoms' && (
          <IconsContainer showsVerticalScrollIndicator={false}>
            <IconsWrapper>
              <Icon source={fluIcon} title="??????" category="flu" />
              <Icon source={headacheIcon} title="??????" category="headache" />
              <Icon source={highFeverIcon} title="??????/??????" category="highFever" />
              <Icon source={stomachacheIcon} title="??????" category="stomachache" />
              <Icon source={indigestionIcon} title="????????????" category="indigestion" />
              <Icon source={acheIcon} title="??????" category="ache" />
              <Icon source={chillIcon} title="??????" category="chill" />
              <Icon source={constipationIcon} title="??????" category="constipation" />
              <Icon source={diarrheaIcon} title="??????" category="diarrhea" />
              <Icon source={heartburnIcon} title="?????????" category="heartburn" />
              <Icon source={muscularPainIcon} title="?????????" category="muscularPain" />
              <Icon source={arthralgiaIcon} title="?????????" category="arthralgia" />
            </IconsWrapper>
          </IconsContainer>
        )}

        {category === 'subjects' && (
          <IconsContainer showsVerticalScrollIndicator={false}>
            <IconsWrapper>
              <Icon source={internalMedicineIcon} title="??????" category="internalMedicine" />
              <Icon source={otolaryngologyIcon} title="???????????????" category="otolaryngology" />
              <Icon source={surgeryIcon} title="??????" category="surgery" />
              <Icon source={dentistryIcon} title="??????" category="dentistry" />
              <Icon source={pediatryIcon} title="??????????????????" category="pediatry" />
              <Icon source={gynecologyIcon} title="????????????" category="gynecology" />
              <Icon source={dermatologyIcon} title="?????????" category="dermatology" />
              <Icon source={ophthalmologyIcon} title="??????" category="ophthalmology" />
              <Icon source={emergencyMedicineIcon} title="???????????????" category="emergencyMedicine" />
              <Icon source={familyMedicineIcon} title="???????????????" category="familyMedicine" />
              <Icon source={urologyIcon} title="????????????" category="urology" />
              <Icon source={psychiatryIcon} title="?????????????????????" category="psychiatry" />
              <Icon source={orthopedicsIcon} title="????????????" category="orthopedics" />
              <Icon source={rehabilitationMedicineIcon} title="???????????????" category="rehabilitationMedicine" />
              <Icon source={rheumatismIcon} title="???????????????" category="rheumatism" />
              <Icon source={cardiologyIcon} title="????????????" category="cardiology" />
              <Icon source={laboratoryMedicineIcon} title="?????????????????????" category="laboratory" />
              <Icon source={infectionMedicineIcon} title="????????????" category="infection" />
            </IconsWrapper>
          </IconsContainer>
        )}

      </ContainerTop>
    </SafeArea>
  );
}

const ButtonsArea = styled.View`
  width: 320px;
  height: 48px;
  background: ${COLOR.GRAY6};
  border-radius: 40px;
  flex-direction: row;
  align-items: center;
`;

const SellectedButton = styled.View`
  width: 55%;
  height: 48px;
  background: ${COLOR.SUB2};
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const UnsellectedButtonRight = styled.TouchableHighlight`
  margin-left: -10%;
  width: 55%;
  height: 48px;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
`;

const UnsellectedButtonLeft = styled.TouchableHighlight`
  margin-right: -10%;
  width: 55%;
  height: 48px;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
`;

const IconsContainer = styled.ScrollView`
  margin-top: 36px;
  width: 320px;
  flex: 1;
`;

const IconsWrapper = styled.View`
  width: 100%;
  flex-flow: row wrap;
  gap: 10px;
`;

const IconButton = styled.TouchableHighlight`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: ${COLOR.GRAY6};
  align-items: center;
`;