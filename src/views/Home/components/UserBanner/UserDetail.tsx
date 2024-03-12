const UserDetail = () => {
  return (
    <>
      {/* {(isTablet || isDesktop) && (
        <Desktop>
          <Box mr="24px">
            <Sticker>{profile ? <ProfileAvatarWithTeam profile={profile} /> : <StyledNoProfileAvatarIcon />}</Sticker>
          </Box>
          <Flex flexDirection="column">
            {profile ? (
              <Heading scale="xl">{t('Hi, %userName%!', { userName: profile.username })}</Heading>
            ) : isLoading ? (
              <Skeleton width={200} height={40} my="4px" />
            ) : null}
            {isLoading || !account ? (
              <Skeleton width={160} height={16} my="4px" />
            ) : (
              <Text fontSize="16px"> {t('Connected with %address%', { address: truncateHash(account) })}</Text>
            )}
          </Flex>
        </Desktop>
      )}
      {isMobile && (
        <Mobile>
          {profile ? (
            <Heading mb="18px" textAlign="center">
              {t('Hi, %userName%!', { userName: profile.username })}
            </Heading>
          ) : isLoading ? (
            <Skeleton width={120} height={20} mt="2px" mb="18px" />
          ) : null}
        </Mobile>
      )} */}
    </>
  )
}

export default UserDetail
