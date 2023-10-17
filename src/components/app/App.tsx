import { AppCommonText } from '../../constant/commonText';
import Entry from '../entry/Entry';
import './App.css';

export default function App(): JSX.Element {
  return (
    <div className="app" data-testid="app">
      {AppCommonText.label}
      <Entry />
    </div>
  );
}
