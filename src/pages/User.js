import React, { useState } from 'react';
import styled from 'styled-components';
import TitledInputBox from '../components/TitledInputBox';
import KeyValueInputBox from '../components/KeyValueInputBox';
import * as braze from '@braze/web-sdk';

function User() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('')
    const [homeCity, setHomeCity] = useState('')
    const [language, setLanguage] = useState('')
    const [gender, setGender] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [pushNotificationSubscriptionType, setPushNotificationSubscriptionType] = useState('')
    const [emailNotificationSubscriptionType, setEmailNotificationSubscriptionType] = useState('')

    const [customAttributeKey, setCustomAttributeKey] = useState('')
    const [customAttributeValue, setCustomAttributeValue] = useState('')

    const [eventName, setEventName] = useState('')
    const [eventPropertyName, setEventProperyName] = useState('')
    const [eventPropertyValue, setEventPropertyValue] = useState('')

    const [productId, setProductId] = useState('')
    const [price, setPrice] = useState('')
    const [currencyCode, setCurrencyCode] = useState('')
    const [quantity, setQuantity] = useState('')
    const [purchasePropertyName, setPurchaseProperyName] = useState('')
    const [purchasePropertyValue, setPurchasePropertyValue] = useState('')

    const setStandardAttributes = () => {

        if (setFirstName) {
            braze.getUser().setFirstName(firstName)
        }

        if (setLastName){
            braze.getUser().setLastName(lastName)  
        }

        if (dateOfBirth) {
             let splitDateOfBirth = dateOfBirth.split('/')
braze.getUser().setDateOfBirth(parseInt(splitDateOfBirth[2]), parseInt(splitDateOfBirth[0]), parseInt(splitDateOfBirth[1]))
        }
    }

    const setCustomAttribute = () => {

    }

    const setCustomEvent = () => {

    }

    const setPurchaseEvent = () => {

    }

    const handleRegisterPushClick = async () => {
        const {
          requestPushPermission,
          logCustomEvent,
          requestImmediateDataFlush
        } = await import(
          "@braze/web-sdk"
        );
        requestPushPermission(() => {
          logCustomEvent("send me push");
          requestImmediateDataFlush();
        });
      };
    

    return (
        <UserContainer>
            <div>
                <Title>Standard Attributes</Title>
                <TitledInputBox title={'First Name'} v={firstName} setV={setFirstName} />
                <TitledInputBox title={'Last Name'} v={lastName} setV={setLastName} />
                <TitledInputBox title={'Birthday'} v={dateOfBirth} setV={setDateOfBirth} />
                <TitledInputBox title={'Email'} v={email} setV={setEmail} />
                <TitledInputBox title={'Country'} v={country} setV={setCountry} />
                <TitledInputBox title={'Home City'} v={homeCity} setV={setHomeCity} />
                <TitledInputBox title={'Lanugage'} v={language} setV={setLanguage} />
                <TitledInputBox title={'Gender'} v={gender} setV={setGender} />
                <TitledInputBox title={'Phone'} v={phoneNumber} setV={setPhoneNumber} />
                <TitledInputBox title={'Push Sub'} v={pushNotificationSubscriptionType} setV={setPushNotificationSubscriptionType} />
                <TitledInputBox title={'Email Sub'} v={emailNotificationSubscriptionType} setV={setEmailNotificationSubscriptionType} />
                <Button onClick={setStandardAttributes}>Submit</Button>
                <Button onClick={handleRegisterPushClick}>Push</Button>
                <Title>Custom Attributes</Title>
                <KeyValueInputBox k={customAttributeKey} setK={setCustomAttributeKey} v={customAttributeValue} setV={setCustomAttributeValue} />
                <Button onClick={setCustomAttribute}>Submit</Button>
            </div>
            <div>
                <Title>Events</Title>
                <TitledInputBox title={'Name'} v={eventName} setV={setEventName} />
                <SubTitle>Properties</SubTitle>
                <KeyValueInputBox k={eventPropertyName} setK={setEventProperyName} v={eventPropertyValue} setV={setEventPropertyValue} />
                <Button onClick={setCustomEvent}>Submit</Button>
                <Title>Purchases</Title>
                <TitledInputBox title={'Product Id'} v={productId} setV={setProductId} />
                <TitledInputBox title={'Price'} v={price} setV={setPrice} />
                <TitledInputBox title={'Currency Code'} v={currencyCode} setV={setCurrencyCode} />
                <TitledInputBox title={'Quantity'} v={quantity} setV={setQuantity} />
                <SubTitle>Properties</SubTitle>
                <KeyValueInputBox k={purchasePropertyName} setK={setPurchaseProperyName} v={purchasePropertyValue} setV={setPurchasePropertyValue} />
                <Button onClick={setPurchaseEvent}>Submit</Button>
            </div>
        </UserContainer>
    )
}

const UserContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const Title = styled.div`
    font-size: 25px;
    padding-top: 60px;
    padding-bottom: 20px;
`;

const SubTitle = styled.div`
    margin-top: 15px;
    margin-bottom: 5px;
`;

const Button = styled.button`
    height: 20px;
    width: 60px;
    margin-top: 20px;
`;


export default User