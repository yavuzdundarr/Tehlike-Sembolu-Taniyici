import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'; 
import Home from '../ekranlar/home';
import Hakkinda from '../ekranlar/hakkinda';
import Ayarlar from '../ekranlar/ayarlar';

const ekranlar1 =  {
   
 Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false
    }
 },
 Hakkinda:{
    screen: Hakkinda
   },
 Ayarlar:{
      screen: Ayarlar
 }
   
}


const StackHakkinda = createStackNavigator(ekranlar1 );

export default createAppContainer(StackHakkinda);
