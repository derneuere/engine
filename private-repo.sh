if [[ -z "${NETLIFY}" ]]; then
  echo "Not netlify"
else
  echo "Netlify"
  npm config set @atmokyaudio:registry https://gitlab.com/api/v4/projects/36729375/packages/npm/
  npm config set -- "//gitlab.com/api/v4/projects/36729375/packages/npm/:_authToken" ${ATMOKY_KEY}
fi
