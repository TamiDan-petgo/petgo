import './BackgroundContainer.scss';

interface ContainerProps { }

const BackgroundContainer: React.FC<ContainerProps> = ({children}) => {
  return (
    <div className="container">
        <div className="half-circle">
        </div>
        <div className = "card-wrapper">
        <div className = "card">
          {children}
        </div>
        </div>
    </div>
  );
};

export default BackgroundContainer;