export default (value, prefix = '-->', locale = ['en-US']) => {
  console.log('--------------------')
  const date = new Date(value)
  return (
    prefix +
    date.toLocaleString([locale], {
      month: 'short',
      day: '2-digit',
      year: 'numeric'
    })
  )
}
