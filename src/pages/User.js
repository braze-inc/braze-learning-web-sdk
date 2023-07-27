import React, { useState } from 'react';
import styled from 'styled-components';
import TitledInputBox from '../components/TitledInputBox';
import KeyValueInputBox from '../components/KeyValueInputBox';
import * as braze from "@braze/web-sdk";

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
            braze.getUser().setDateOfBirth(parseInt(splitDateOfBirth[2]), 
                parseInt(splitDateOfBirth[0]), parseInt(splitDateOfBirth[1]))
        }
    }

    const setCustomAttribute = () => {

    }

    const setCustomEvent = () => {

    }

    const setPurchaseEvent = () => {

    }


    return (
        <UserContainer>
            <div>
                <Title>Standard Attributes</Title>
                <TitledInputBox title={'First Name'} value={firstName} setValue={setFirstName} />
                <TitledInputBox title={'Last Name'} value={lastName} setValue={setLastName} />
                <TitledInputBox title={'Birthday'} value={dateOfBirth} setValue={setDateOfBirth} />
                <TitledInputBox title={'Email'} value={email} setValue={setEmail} />
                <TitledInputBox title={'Country'} value={country} setValue={setCountry} />
                <TitledInputBox title={'Home City'} value={homeCity} setValue={setHomeCity} />
                <TitledInputBox title={'Language'} value={language} setValue={setLanguage} />
                <TitledInputBox title={'Gender'} value={gender} setValue={setGender} />
                <TitledInputBox title={'Phone'} value={phoneNumber} setValue={setPhoneNumber} />
                <TitledInputBox title={'Push Sub'} value={pushNotificationSubscriptionType} setValue={setPushNotificationSubscriptionType} />
                <TitledInputBox title={'Email Sub'} value={emailNotificationSubscriptionType} setValue={setEmailNotificationSubscriptionType} />
                <Button onClick={setStandardAttributes}>Submit</Button>
                <Title>Custom Attributes</Title>
                <KeyValueInputBox k={customAttributeKey} setKey={setCustomAttributeKey} value={customAttributeValue} setValue={setCustomAttributeValue} />
                <Button onClick={setCustomAttribute}>Submit</Button>
            </div>
            <div>
                <Title>Events</Title>
                <TitledInputBox title={'Name'} value={eventName} setValuealue={setEventName} />
                <SubTitle>Properties</SubTitle>
                <KeyValueInputBox k={eventPropertyName} setKey={setEventProperyName} value={eventPropertyValue} setValue={setEventPropertyValue} />
                <Button onClick={setCustomEvent}>Submit</Button>
                <Title>Purchases</Title>
                <TitledInputBox title={'Product Id'} value={productId} setValue={setProductId} />
                <TitledInputBox title={'Price'} value={price} setValue={setPrice} />
                <TitledInputBox title={'Currency Code'} value={currencyCode} setValue={setCurrencyCode} />
                <TitledInputBox title={'Quantity'} value={quantity} setValue={setQuantity} />
                <SubTitle>Properties</SubTitle>
                <KeyValueInputBox k={purchasePropertyName} setKey={setPurchaseProperyName} value={purchasePropertyValue} setValue={setPurchasePropertyValue} />
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