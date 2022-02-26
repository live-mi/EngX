import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  textInput: {
    margin: 20,
  },
  searchHistoryContainer: {
    backgroundColor: '#ffffff',
    margin: 20,
    marginTop: 0,
    width: '90%',
    zIndex: 1,
  },
  searchHistoryItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#cccccc',
  },
})
