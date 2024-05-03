import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { PersonalInformationFormInputs } from '../PersonalInformation';
import Button from '../../common/Button';

interface AddressInputProps {
  value: string;
  onChange: (value: string) => void;
  onClickModal: () => void;
  register: UseFormRegister<PersonalInformationFormInputs>;
  errors: FieldErrors<PersonalInformationFormInputs>;
}

const AddressInput = ({ value, onClickModal, errors, register }: AddressInputProps) => {
  return (
    <>
      <fieldset className='pb-1 flex flex-col md:flex-row'>
        <legend className='mb-1 text-sm'>주소</legend>
        <input
          type='text'
          value={value}
          className='w-full p-2 border rounded mb-2 '
          placeholder='찾기 버튼을 통해 주소를 입력하세요'
          {...register('address', { required: true, maxLength: 100 })}
          readOnly
        />
        <Button
          size='small'
          color='pastelred'
          children='찾기'
          onClick={onClickModal}
          className='self-end'
          type='button'
        />
      </fieldset>
      {errors.address && <span className='text-red text-xs text-end'>주소를 입력해주세요.</span>}
    </>
  );
};

export default AddressInput;
