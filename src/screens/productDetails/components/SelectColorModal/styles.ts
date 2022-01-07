import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    minHeight: '40%',
    maxHeight: '60%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    margin: 20,
    padding: 20,
  },
  iconContainer: {},
  titleText: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#8F8F8F',
    marginTop: 10,
    textAlign: 'center',
  },
  descriptionText: {
    fontStyle: 'normal',
    fontSize: 15,
    color: '#8F8F8F',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    width: '100%',
    minWidth: 100,
    height: 40,
    background: '#008ACE',
  },
})
