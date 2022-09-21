import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Txt} from '../index';
import {Color, Space, TxtWeight} from '../../theme/const';
import Modal from 'react-native-modal';
import {RadioBtn} from '../index';

const FilterModal = ({visible, onClose}) => {
  const Sorting = [
    {
      title: 'This Month',
    },
    {
      title: 'Last Month',
    },
    {
      title: 'Last 3 Months',
    },
    {
      title: 'Last Year',
    },
  ];
  const [sortBy, setSortBy] = useState(null);
  return (
    <Modal
      isVisible={visible}
      animationType="slide"
      transparent={true}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={{flex: 1, justifyContent: 'flex-end'}}>
      <View style={styles.container}>
        <Txt
          color={Color.primary}
          weight={TxtWeight.Bold}
          size={20}
          center
          mt={12}
          mb={14}>
          Sort By
        </Txt>
        <View style={styles.line} />
        <View style={{marginHorizontal: Space.MD, marginVertical: Space.MD}}>
          <RadioBtn
            data={Sorting}
            setSelectedVal={e => {
              onClose();
              setSortBy(e.title);
            }}
            selectedVal={sortBy}
          />
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.White,
    borderRadius: 6,
  },
  line: {
    borderWidth: 1,
    borderColor: Color.borderColor,
  },
});
