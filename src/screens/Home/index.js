//React
import styled from 'styled-components/native';
import { useIsFocused } from '@react-navigation/native';

//Components
import { COLOR } from 'constants/design';
import { StatusBar } from 'expo-status-bar';
import { StatusBarArea, SafeArea, ContainerTop, ContainerCenter } from 'components/Layout';
import { Text } from 'components/Text';
import { Image } from 'components/Image';

//Assets
import bannerImage1 from 'assets/images/banner_image1.png';
import fluIcon from 'assets/icons/symptoms/flu.png';
import headacheIcon from 'assets/icons/symptoms/headache.png';
import highFeverIcon from 'assets/icons/symptoms/high-fever.png';
import stomachacheIcon from 'assets/icons/symptoms/stomachache.png';
import indigestionIcon from 'assets/icons/symptoms/indigestion.png';
import acheIcon from 'assets/icons/symptoms/ache.png';
import internalMedicineIcon from 'assets/icons/medical-subjects/internal-medicine.png';
import otolaryngologyIcon from 'assets/icons/medical-subjects/otolaryngology.png';
import ophthalmologyIcon from 'assets/icons/medical-subjects/ophthalmology.png';

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();
  return isFocused && <StatusBar {...props} />;
}

export default function HomeScreen({ navigation }) {

  function Icon({ source, category, title }) {
    return (
      <IconButton
        underlayColor={COLOR.GRAY5}
        onPress={() => {
          navigation.navigate('TreatmentReservation', {
            screen: 'BookingDirectly',
            params: { category: category, name: title },
          });
        }}
      >
        <>
          <Image source={source} marginTop={6} width={48} height={48}/>
          <Text T7 medium>{title}</Text>
        </>
      </IconButton>
    )
  }

  return (
    <>
      <StatusBarArea backgroundColor={COLOR.MAIN}>
        <FocusAwareStatusBar animated style="light" />
      </StatusBarArea>

      <SafeArea backgroundColor={COLOR.MAIN}>
        <ContainerTop>

          <BannerContainer>
            <Image source={bannerImage1} width={300} height={110} />
          </BannerContainer>

          <ContentsContainer>
            <Text T6 color={COLOR.GRAY1}>??????????????? ?????? ???????????? ???????????????</Text>
            <Text T3 bold marginTop={6}>????????? ??????</Text>

            <ContainerCenter>
              <IconsWrapper>
                <Icon source={fluIcon} title="??????" category="flu" />
                <Icon source={headacheIcon} title="??????" category="headache" />
                <Icon source={highFeverIcon} title="??????/??????" category="highFever" />
                <Icon source={stomachacheIcon} title="??????" category="stomachache" />
                <Icon source={indigestionIcon} title="????????????" category="indigestion" />
                <Icon source={acheIcon} title="??????" category="ache" />
                <Icon source={internalMedicineIcon} title='??????' category="internalMedicine" />
                <Icon source={otolaryngologyIcon} title='???????????????' category="otolaryngology" />
                <Icon source={ophthalmologyIcon} title='??????' category="ophthalmology" />
              </IconsWrapper>

              <FullCategoryButton
                underlayColor={COLOR.GRAY5}
                onPress={() => navigation.navigate('TreatmentReservation', {screen: 'Category'})}
              >
                <Text T5 medium>??????/????????? ?????? ?????? +</Text>
              </FullCategoryButton>
            </ContainerCenter>
          </ContentsContainer>
        </ContainerTop>
      </SafeArea>
    </>
  );
}

const BannerContainer = styled.View`
  width: 100%;
  height: 130px;
  align-items: center;
  justify-content: center;
`;

const ContentsContainer = styled.View`
  flex: 1;
  width: 100%;
  padding: 42px 24px 0px 24px;
  background-color: #FFFFFF;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const IconsWrapper = styled.View`
  width: 300px;
  flex-flow: row wrap;
  gap: 30px;
`;

const IconButton = styled.TouchableHighlight`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  background-color: ${COLOR.GRAY6};
  align-items: center;
`;

const FullCategoryButton = styled.TouchableHighlight`
  margin-top: 30px;
  width: 300px;
  height: 56px;
  border-radius: 5px;
  background-color: ${COLOR.GRAY6};
  align-items: center;
  justify-content: center;
`;