import LoadingScreen from '../LoadingScreen/LoadingScreen';
import './BackgroundContainer.scss';
import {IonHeader, IonTitle, IonToolbar} from '@ionic/react';
interface ContainerProps {
  circleOnTop?: boolean,
  title?: string|null,
  splitTitleAfterWord?: number,
  loading?: boolean,
  children? : React.ReactNode, 
}

function getCSSClassName(circleOnTop: boolean) : string {
  let returning: string = "container ";
  returning = returning += circleOnTop ? "circleOnTop" : "";
  console.log(returning);
  return returning.trim();
}

function showTitleContainer(title: string|null, splitTitleAfterWord: number): boolean {
  if(title != null && title.trim().length > 0 && splitTitleAfterWord != 0){return true};
  return false;
}

function getTitle(title: string|null, splitTitleAfterWord: number): string {
  let returnTitle: string = "";
  if (!showTitleContainer(title, splitTitleAfterWord)) {return returnTitle}
  let words : string[] = title  == null ? [] : title.split(' ');
  console.log(words);
  if(words.length >= splitTitleAfterWord){
    for(var i = 0; i < splitTitleAfterWord; i++) 
    { 
      returnTitle += words[i];
      if(i != splitTitleAfterWord) { returnTitle += " ";}
    }
  }
  return returnTitle;
}

function getSubTitle(title: string| null, splitTitleAfterWord: number) : string {
  let subTitle: string = "";
  if(!showTitleContainer(title, splitTitleAfterWord)) { return subTitle }
  let words: string[] = title == null ? [] : title.split(' ');
  if(words.length >= splitTitleAfterWord){
    words = words.slice(splitTitleAfterWord, words.length);
    words.forEach((value: string) => {
      subTitle += value + " ";
    });
  }
  return subTitle;
}

/**
 * Get the backgroubd container and Loading screen
 * @param props properties of BackgroundContainer, loading and children  
 * @returns Background Container 
 */
    const BackgroundContainer: React.FC<ContainerProps> = ({loading = false, children = null, circleOnTop = false, title=null, splitTitleAfterWord=0}) => {
    return(
      <div className={getCSSClassName(circleOnTop)}>
        <div className="half-circle">
        </div>
        {showTitleContainer(title, splitTitleAfterWord) ? 
        <div className="headline">
          <span className="title">{getTitle(title, splitTitleAfterWord)}</span>
          <span className = "subtitle">{getSubTitle(title, splitTitleAfterWord)}</span>
        </div> : null}
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