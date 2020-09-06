import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Left,
  Body,
  Right,
  Title,
} from 'native-base';
import {StyleSheet} from 'react-native';
import Tab1 from './Tabs/tab1';
import Tab2 from './Tabs/tab2';
import Tab3 from './Tabs/tab3';
export default class TabScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#009387'}} hasTabs>
          <Left />
          <Body>
            <Title style={styles.item}>News App</Title>
          </Body>
          <Right />
        </Header>
        <Tabs tabBarUnderlineStyle={{backgroundColor: 'white'}}>
          <Tab
            tabStyle={{backgroundColor: '#009387'}}
            activeTabStyle={{backgroundColor: '#009387'}}
            textStyle={{color: 'white'}}
            activeTextStyle={{color: 'white'}}
            heading="IND">
            <Tab1 />
          </Tab>
          <Tab
            tabStyle={{backgroundColor: '#009387'}}
            activeTabStyle={{backgroundColor: '#009387'}}
            textStyle={{color: 'white'}}
            activeTextStyle={{color: 'white'}}
            heading="US">
            <Tab2 />
          </Tab>
          <Tab
            tabStyle={{backgroundColor: '#009387'}}
            activeTabStyle={{backgroundColor: '#009387'}}
            textStyle={{color: 'white'}}
            activeTextStyle={{color: 'white'}}
            heading="UK">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    color: 'white',
    alignItems: 'center',
  },
});
