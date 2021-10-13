import React from 'react'
import {isPlatform, IonHeader, IonToolbar, IonTitle} from '@ionic/react';

interface PageHeaderProps {
    title: string, 
}

const PageHeader: React.FC<PageHeaderProps> = ({title}) => {
    return (
        <div>
            {(isPlatform('mobile') || true)?       
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{title}</IonTitle>
                </IonToolbar>
            </IonHeader>
            : null }
        </div>
    )
}

export default PageHeader
