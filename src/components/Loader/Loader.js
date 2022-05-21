import { TailSpin } from 'react-loader-spinner';

function MarkUpLoader() {
  return (
    <div className="loader">
      <TailSpin height="40" width="40" color="#ffffff" ariaLabel="loading" />
    </div>
  );
}

export default MarkUpLoader;
