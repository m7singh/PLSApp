/*export interface IProperty {
  id: string;
  name: string;
  date: Date;
  time: string;
  price: number;
  imageUrl: string;
  location?: {
    address: string;
    city: string;
    country: string;

  };
  onlineUrl?: string;
  sessions: ISession[]; 
}*/

  export interface ISession {
    id: number;
    name: string;
    presenter: string;
    duration: number;
    level: string;
    abstract: string;
    voters: string[];
  }

  export interface IProperty
  {                
      propertyId : string;
      active : number;  
      propertyIdentification : IPropertyIdentification;
      propertyListingType   : IListingType  
      propertyAddress : IAddress
      propertyDetails : IPropertyDetails  
      propertyGeoLoc : IPropertyGeoLoc     
      propertyPrice : IPropertyPrice
      propertyAccount: IPropertyAccount   
      listingAgent: IListingAgent    
      keywords : string     
      sessions: ISession[];         
  }


  export interface IAddress
  {        
        street :string        
        street2 : string        
        city : string       
        county : string        
        state : string        
        zip : string
  }   
  export interface IListingType
  {       
        forSale : boolean      
        forRent : boolean       
        saleAgent : boolean        
        saleOwner : boolean       
        saleNewConstructon : boolean        
        saleForeclosure : boolean

  }
  export interface IPropertyIdentification
  {
        customPropertyID :string        
        mlsID :string        
        otherID : string
  }

  export interface  IPropertyDetails
  {        
        beds : string       
        baths : string       
        squareFeet : number        
        lotSize : number       
        yearBuilt : number       
        hoa : number        
        propertyType : string
  }


  export interface  IPropertyGeoLoc
  {        
        x : number  // Longitude
        y : number // Latitude
  }

  export interface IPropertyPrice
  {
      price : number
      lastPrice : number
  }

  export interface IPropertyAccount
  {
      daysListed : number
      dateListed : Date
      dateExpiry : Date       
  }

  export interface IListingAgent
  {       
      listingAgentID : string       
      fullName : string         
      firstName : string        
      lastName : string        
      email : string       
      phone : string        
      cellPhone : string        
      fax : string 
  }