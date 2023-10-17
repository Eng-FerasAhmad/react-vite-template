import { useEffect, useState } from 'react';
import { EntryViewModel } from '../../types/entries';
import EntriesService from '../../service/EntriesService';

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

  return (
    <div className="entry" data-testid="entry">
      entry: {entryData?.count}
    </div>
  );
}
