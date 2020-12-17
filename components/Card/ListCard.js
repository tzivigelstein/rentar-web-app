import React, { useState } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { ListPostImage } from './CardStyles'
import { PostInfo } from './CardStyles'
import { PostInteraction, PostIcons } from './CardStyles'
import { Icon } from './CardStyles'
import { Likes } from './CardStyles'

const ListPostContainer = styled.div`
  width: 100%;
  margin-bottom: 1.6rem;
  background: #fff;
  box-shadow: 0px 0px 30px -28px #000;

  @media (min-width: 481px) {
    width: 80%;
    margin: 0 auto;
    margin-bottom: 3rem;
  }

  @media (min-width: 768px) {
    width: 50%;
    margin: 0 auto;
    margin-bottom: 3rem;
  }
`

const ListCard = ({ post }) => {
  const [like, setLike] = useState(false)

  return (
    <ListPostContainer>
      <Link href="/post/[id]" as={`/post/${post._id}`}>
        <ListPostImage src={`/${Math.round(Math.random() * 5)}.jpg`} />
      </Link>
      <PostInfo>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
      </PostInfo>
      <PostInteraction>
        <PostIcons>
          <Icon onClick={() => setLike(!like)} src={like ? '/hearts.svg' : '/heartr.svg'} />
          <Icon src="/share.svg" />
          <Link href="/post/[id]" as={`/post/${post._id}`}>
            <Icon src="/plus.svg" />
          </Link>
        </PostIcons>
        <Likes>{post.likes} Likes</Likes>
      </PostInteraction>
    </ListPostContainer>
  )
}

export default ListCard
