<template>
  <span>
    <h1>Events Listing</h1>
    <div class="event" v-for="event in eventList" :key="event.id">
      <eventCard :title="event.name" :id="event.id" :description="event.description"/>
    </div>
  </span>
</template>
<script>
import eventCard from './EventCard.vue'

export default {
  components: {
    eventCard
  },
  data() {
    return {
      eventList: [
        {
          id: 0,
          name: 'css',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, aspernatur.'
        },
        {
          id: 1,
          name: 'c++',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing.'
        },
        { id: 2, name: 'html', description: 'Lorem, ipsum dolor.' },
        {
          id: 3,
          name: 'js',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, id nobis. Suscipit.'
        },
        {
          id: 4,
          name: 'c#',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur?'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.event {
  border: solid 2px red;
  margin: 5px;
  padding: 5px;
}
</style>
