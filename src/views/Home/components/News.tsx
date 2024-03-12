import React, { useState } from 'react'
import { Flex, Heading } from '@pancakeswap/uikit'
import { useWeb3React } from '@pancakeswap/wagmi'
import { useTranslation } from '@pancakeswap/localization'
import useTheme from 'hooks/useTheme'
import styled, { css } from 'styled-components'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const newsFeedData = [
  {
    image: '/images/news_example.png',
    author: 'John Doe',
    date: '2023-03-10',
    title:
      '1: Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '/',
  },
  {
    image: '/images/news_example.png',
    author: 'Jane Smith',
    date: '2023-03-09',
    title:
      '2: Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '/',
  },
  {
    image: '/images/news_example.png',
    author: 'Bob Johnson',
    date: '2023-03-08',
    title:
      '3: Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '/',
  },
  {
    image: '/images/news_example.png',
    author: 'Alice Williams',
    date: '2023-03-07',
    title:
      '4: Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '/',
  },
  {
    image: '/images/news_example.png',
    author: 'Tim Johnson',
    date: '2023-03-07',
    title:
      '5: Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '/',
  },
]

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  return date.toLocaleDateString('en-US', options)
}

const MobileFlex = styled.div`
  position: relative;
  display: flex;
  gap: 2rem;
  margin: 4rem 0;
  justify-content: center;

  ${css`
    @media screen and (max-width: 768px) {
      flex-direction: column-reverse;
      align-items: center;
    }
  `}
`

const StyledFlex = styled(Flex)`
  ${css`
    @media screen and (max-width: 768px) {
      width: 100%;
      flex-direction: column-reverse;
    }

    @media screen and (min-width: 769px) and (max-width: 1024px) {
      height: 60vw;
      width: 100%;
    }

    @media screen and (min-width: 1025px) {
      height: 70%;
      width: 100%;
    }
  `}
`

const NewsFeed = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  overflow: hidden;
  position: relative;
  transition: transform 0.5s ease;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const NewsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  cursor: pointer;
`

const NewsImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
`

const NewsAuthor = styled.p`
  font-size: 0.8rem;
  color: #8b1fff;
  margin-bottom: 0.5rem;
  ::before {
    content: 'By ';
  }
`

const NewsDate = styled.p`
  font-size: 0.8rem;
  color: #8b1fff;
  margin-bottom: 1rem;
`

const NewsTitle = styled.h3`
  font-size: 1.2rem;
  color: #000;
  text-align: left;
`

const SlideButton = styled.button`
  position: absolute;
  top: 40%;
  display: flex;
  align-items: center;
  transform: translateY(-50%);
  background-color: transparent;
  border: 4px solid #c58fff;
  border-radius: 50%;
  color: #c58fff;
  font-size: 2rem;
  padding: 0.3rem;
  cursor: pointer;
  z-index: 1;

  &:last-child {
    right: -1.5rem;
  }
`

const News = () => {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleSlide = (direction) => {
    const numVisibleNews = window.innerWidth > 768 ? 3 : 1
    let nextIndex

    if (direction === 'prev') {
      nextIndex = currentIndex === 0 ? newsFeedData.length - numVisibleNews : currentIndex - 1
    } else {
      nextIndex = (currentIndex + 1) % (newsFeedData.length - numVisibleNews + 1)
    }

    setCurrentIndex(nextIndex)
  }

  const handleNewsClick = (link) => {
    window.open(link, '_blank') // 링크를 새 탭으로 열기
  }

  return (
    <>
      <StyledFlex
        flex={[null, null, null, '1']}
        mb={['24px', null, null, '0']}
        position="relative"
        alignItems="center"
        justifyContent="center"
      >
        <Heading scale="xl" color="#17022d" mb="24px" width="100%" textAlign="center">
          {t('Featured News')}
        </Heading>
      </StyledFlex>
      <MobileFlex>
        <NewsFeed>
          {newsFeedData.slice(currentIndex, currentIndex + (window.innerWidth > 768 ? 3 : 1)).map((newsItem) => (
            <NewsItem onClick={() => handleNewsClick(newsItem.link)}>
              <NewsImage src={newsItem.image} alt={newsItem.title} />
              <Flex justifyContent="space-around" width="100%">
                <NewsAuthor>{newsItem.author}</NewsAuthor>
                <NewsDate>{formatDate(newsItem.date)}</NewsDate>
              </Flex>
              <NewsTitle>{newsItem.title}</NewsTitle>
            </NewsItem>
          ))}
        </NewsFeed>

        <SlideButton onClick={() => handleSlide('prev')} style={{ left: '-1.5rem' }}>
          <ArrowBackIcon />
        </SlideButton>
        <SlideButton onClick={() => handleSlide('next')}>
          <ArrowForwardIcon />
        </SlideButton>
      </MobileFlex>
    </>
  )
}

export default News
