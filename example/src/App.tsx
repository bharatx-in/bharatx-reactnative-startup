import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import BharatxReactnativeAlternatedata from '@bharatx/bharatx-reactnative-alternatedata';
import BharatxReactnativeStartup from '@bharatx/bharatx-reactnative-startup';
import BharatxReactnativeSecurityhelpers from '@bharatx/bharatx-reactnative-securityhelpers';
import BharatxReactnativeCommon from '@bharatx/bharatx-reactnative-common';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    BharatxReactnativeStartup.initialize('testPartnerId', 'testApiKey');
    BharatxReactnativeSecurityhelpers.storeThemeColorPreferenceInHex('#EB7527');
    BharatxReactnativeCommon.registerUserId('testuser1');
    BharatxReactnativeCommon.registerCreditAccess();
    BharatxReactnativeCommon.showBharatXProgressDialog();
    setTimeout(() => {
      BharatxReactnativeCommon.closeBharatXProgressDialog();
      BharatxReactnativeCommon.confirmTransactionWithUser(
        1000,
        () => {
          console.log('onUserConfirmedTransaction');
        },
        () => {
          console.log('onUserAcceptedPrivacyPolicy');
          BharatxReactnativeAlternatedata.register();
        },
        () => {
          console.log('onUserCancelledTransaction');
        }
      );
    }, 5000);
    setResult(4);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
