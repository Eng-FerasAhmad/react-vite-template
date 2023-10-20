import { useEffect, useState, ChangeEvent } from 'react';
import { EntryViewModel } from '../../types/entries';
import EntriesService from '../../service/EntriesService';
import Button from '../../library/button/Button';
import InputText from '../../library/input-text/InputText';

export default function Entry(): JSX.Element {
  const [entryData, setEngtryData] = useState<EntryViewModel | undefined>(
    undefined
  );

  useEffect(() => {
    const { promise } = EntriesService.fetchViewModel();
    promise.then((data) => {
      setEngtryData(data);
    });
  }, []);

  const clickHandler = () => {
    console.log('click');
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement> | undefined) => {
    console.log(e?.target.value)
  }

  return (
    <div className="entry" data-testid="entry">
      entry: {entryData?.count}

      <div className='entry-form'>
        <Button label='click here' clickHandler={clickHandler} />
        <InputText placeholder='this is placeholder' changeHandler={changeHandler} label='Name'/>
      </div>
    </div>
  );
}
