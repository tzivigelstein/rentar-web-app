import React, { useState, useContext, useEffect } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import authContext from '../context/auth/authContext'
import useOnScreen from '../Hooks/useOnScreen'
  background: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  top: 0;
`

const Title = styled.h1`
  font-family: 'Pacifico', cursive;
`
  margin: 0;
  padding: 0;
  line-height: 1;
  color: #000;
  font-weight: 400;
  text-align: left;
  font-size: 2rem;
  display: inline-block;
`

const Icon = styled.img`
  width: 1.8rem;
  padding: 0;
  margin: 4px auto;
  float: right;
`

const NewIcon = styled.img`
  width: 1.7rem;
  margin: 0 1.5rem;
  background: rgb(232, 202, 7);
  background: linear-gradient(315deg, rgba(232, 202, 7, 1) 0%, rgba(82, 199, 64, 1) 35%, rgba(15, 165, 214, 1) 100%);
  border-radius: 25%;
  padding: 0.25rem 0.3rem;
`

const RBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`



const BackText = styled.span`
  font-size: 1.2rem;
  margin-left: 0.6rem;
  padding: 0.5rem 0;
`

const ChevronIcon = styled.img`
  width: 0.8rem;
  padding: 0;
  margin: 4px auto;
`

const SettingsIcon = styled.img`
  width: 1.7rem;
`

const Desktop = styled.div`
  display: flex;
  justify-content: space-around;
`

const JoinButton = styled.button`
  border-radius: 8px;
  border: 1px solid;
  background: rgb(232, 202, 7);
  background: linear-gradient(315deg, rgba(232, 202, 7, 1) 0%, rgba(82, 199, 64, 1) 35%, rgba(15, 165, 214, 1) 100%);
  padding: 0.5rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  outline: none;
  cursor: pointer;
  margin-left: 1.5rem;
  @media (max-width: 480px) {
    margin-left: 0;
  }
`

const LogButton = styled.button`
  border: 2px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    315deg,
    rgba(232, 202, 7, 1) 0%,
    rgba(82, 199, 64, 1) 35%,
    rgba(15, 165, 214, 1) 100%
  );
  padding: 0.5rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  color: #222;
  outline: none;
  background: transparent;
  cursor: pointer;
`
const NavBar = styled.nav`
  height: 70px;
  background: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  top: 0;
`

const Title = styled.h1`
  font-family: 'Pacifico', cursive;
  margin: 0;
  padding: 0;
  line-height: 1;
  color: #000;
  font-weight: 400;
  text-align: left;
  font-size: 2rem;
  display: inline-block;
`



const NewIcon = styled.img`
















