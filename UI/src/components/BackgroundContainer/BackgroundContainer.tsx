import LoadingScreen from '../LoadingScreen/LoadingScreen';
import './BackgroundContainer.scss';

interface ContainerProps {
  loading?: boolean
  children? : React.ReactNode, 
}
/**
 * Get the backgroubd container and Loading screen
 * @param props properties of BackgroundContainer, loading and children  
 * @returns Background Container 
 */
const BackgroundContainer: React.FC<ContainerProps> = ({loading = false, children = null}) => {
  return (
    <div className="container">
        <div className="half-circle">
        </div>
        <div className = "card-wrapper">
        {loading ? <LoadingScreen /> : null}
        <div className = "card">
          {children}
        </div>
        </div>
    </div>
  );
};

export default BackgroundContainer;