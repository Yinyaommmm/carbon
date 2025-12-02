import { useParams } from 'react-router-dom';

const SupplierDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Supplier Detail: {id}</h1>
      <p>Detailed Carbon Data and Action Plan for this Supplier.</p>
    </div>
  );
};

export default SupplierDetail;