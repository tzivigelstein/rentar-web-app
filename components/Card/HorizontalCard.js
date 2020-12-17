import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { PostInfo } from './CardStyles'
import { Icon } from './CardStyles'

const HorizontalPostContainer = styled.div`
  width: 100%;
  min-width: 200px;
  margin-right: 0.8rem;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 0px 30px -28px #000;
  &:first-of-type {
    margin-left: 0.8rem;
  }
  &:last-of-type {
    margin-right: 0.8rem;
  }
`

const HorizontalPostImage = styled.img`
  width: 100%;
  border-radius: 12px 12px 0 0;
`

const Title = styled.h3`
  color: #333;
`

const PostInfoData = styled.div`
  display: flex;
  justify-content: space-around;
`

const HorizontalCard = ({ post }) => {
  return (
    <Link href="/post/[id]" as={`/post/${post._id}`}>
      <HorizontalPostContainer>
        <HorizontalPostImage src={`/${Math.round(Math.random() * 5)}.jpg`} />
        <PostInfo>
          <Title>{post.title}</Title>
          <PostInfoData>
            <Icon src="/bath.svg" alt="" />
            <p>{post.bathroom}</p>
            <Icon src="/environments.svg" alt="" />
            <p>{post.environments} amb.</p>
          </PostInfoData>
        </PostInfo>
      </HorizontalPostContainer>
    </Link>
  )
}

export default HorizontalCard
