import styled from '@emotion/styled'

export const PostInfo = styled.div`
  margin: 1rem;
  h3 {
    margin: 0;
    padding: 0;
  }
`

export const Icon = styled.img`
  width: 1.5rem;
  transition: all 0.3s ease;
  &:active {
    transform: scale(1.1);
  }
`

export const Likes = styled.p`
  padding: 0;
  margin: 0;
  text-align: right;
  margin: 0 1rem 0 0;
`

export const ListPostImage = styled.img`
  width: 100%;
`
export const PostInteraction = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  width: 90%;
  border-top: 1px solid #ddd;
`

export const PostIcons = styled.ul`
  width: 35%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 1rem 0 0;
  padding: 0;
`
