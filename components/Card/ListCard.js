import React, { useState } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { ListPostImage } from './CardStyles'
import { PostInfo } from './CardStyles'
import { PostInteraction } from './CardStyles'
import { Icon } from './CardStyles'
import { Likes } from './CardStyles'

const ListPostContainer = styled.div`
  width: 100%;
  margin-bottom: 1.6rem;
  background: #fff;
  @media (min-width: 481px) {
    width: 50%;
    margin: 0 auto;
    margin-bottom: 3rem;
  }
`

const ListCard = ({ post }) => {
  const [like, setLike] = useState(false)

  return (
    <ListPostContainer>
      <ListPostImage src="/house.jpg" />
      <PostInfo>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
      </PostInfo>
      <PostInteraction>
        <ul>
          <Icon onClick={() => setLike(!like)} src={like ? '/hearts.svg' : '/heartr.svg'} />
          <Icon src="/share.svg" />
          <Link href="/post/[id]" as={`/post/${post._id}`}>
            <Icon src="/plus.svg" />
          </Link>
        </ul>
        <Likes>{post.likes} likes</Likes>
      </PostInteraction>
    </ListPostContainer>
  )
}

export default ListCard
