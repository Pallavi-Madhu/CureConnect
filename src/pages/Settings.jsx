import React from 'react';
import { View, Text,Button} from 'react-native';
import { useDispatch } from 'react-redux';
import { signOut } from '../../Store/AuthThunk';

const Settings = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <Text>Settings screen</Text>
      <Button title='Log Out'
      onPress={() => dispatch(signOut())}></Button>
    </View>
  );
};

export default Settings;
