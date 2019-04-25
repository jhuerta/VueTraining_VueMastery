<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit.prevent="createEvent">
      <BaseSelect
        label="Select a category"
        class="field"
        v-model="event.category"
        :items="categories"
        @blur="$v.event.category.$touch()"
        :class="{error: $v.event.category.$error}"
      />
      <template v-if="$v.event.category.$error">
        <p class="errorMessage" v-if="!$v.event.category.required">Category is required.</p>
      </template>

      <h3>Name & describe your event</h3>

      <BaseInput
        label="Title"
        placeholder="Add an event title"
        v-model="event.title"
        type="text"
        class="field"
        @blur="$v.event.title.$touch()"
        :class="{error: $v.event.title.$error}"
      />
      <template v-if="$v.event.title.$error">
        <p class="errorMessage" v-if="!$v.event.title.required">Title is required.</p>
      </template>

      <BaseInput
        label="Description"
        placeholder="Add a description"
        v-model="event.description"
        type="text"
        class="field"
        @blur="$v.event.description.$touch()"
        :class="{error: $v.event.description.$error}"
      />
      <template v-if="$v.event.description.$error">
        <p class="errorMessage" v-if="!$v.event.description.required">Description is required.</p>
      </template>

      <h3>Where is your event?</h3>

      <BaseInput
        label="Location"
        placeholder="Add a location"
        v-model="event.location"
        type="text"
        class="field"
        @blur="$v.event.location.$touch()"
        :class="{error: $v.event.location.$error}"
      />
      <template v-if="$v.event.location.$error">
        <p class="errorMessage" v-if="!$v.event.location.required">Location is required.</p>
      </template>

      <h3>When is your event?</h3>

      <div class="field">
        <label>Date</label>
        <datepicker
          v-model="event.date"
          placeholder="Select a date"
          @opened="$v.event.date.$touch()"
          :input-class="{error: $v.event.date.$error}"
        />
      </div>

      <template v-if="$v.event.date.$error">
        <p class="errorMessage" v-if="!$v.event.date.required">Date is required.</p>
      </template>

      <BaseSelect
        label="Select a time"
        class="field"
        v-model="event.time"
        :items="times"
        @blur="$v.event.time.$touch()"
        :class="{error: $v.event.time.$error}"
      />
      <template v-if="$v.event.time.$error">
        <p class="errorMessage" v-if="!$v.event.time.required">Time is required.</p>
      </template>
      <!-- <div class="field">
        <label>Select a time</label>
        <select v-model="event.time">
          <option v-for="time in times" :key="time">{{ time }}</option>
        </select>
      </div>-->

      <div style="margin-bottom:20px">
        <BaseButton
          @click.prevent="callingGlobalMixin"
          buttonClass="button -fill-gradient"
        >Global Mixin</BaseButton>
      </div>

      <div style="margin-bottom:20px">
        <BaseButton @click.prevent="alertMessage" buttonClass="button -fill-gradient">Send Message</BaseButton>
      </div>
      <div>
        <BaseButton
          type="submit"
          buttonClass="button -fill-gradient"
          :disabled="$v.$anyError/* || $v.$invalid*/"
        >Submit</BaseButton>

        <p v-if="$v.$anyError" class="errorMessage">Check the errors</p>
      </div>
      <!-- <input value="Submit"> -->
    </form>
  </div>
</template>


<script>
import Datepicker from 'vuejs-datepicker'
import NProgress from 'nprogress'
import { required } from 'vuelidate/lib/validators'

export default {
  components: {
    Datepicker
  },
  validations: {
    event: {
      category: { required },
      title: { required },
      description: { required },
      location: { required },
      date: { required },
      time: { required }
    }
  },
  data() {
    const times = []
    for (let i = 1; i <= 24; i++) {
      times.push(i + ':00')
    }
    return {
      times,
      categories: this.$store.state.categories,
      event: this.createFreshEventObject()
    }
  },
  methods: {
    callingGlobalMixin() {
      alert(this.dataFromMixin)
    },
    alertMessage() {
      alert('I have been clicked')
    },
    createEvent() {
      this.$v.$touch() // Making sure every field is dirty (for validation)
      if (!this.$v.$invalid) {
        NProgress.start()
        this.$store
          .dispatch('event/createEvent', this.event)
          .then(() => {
            // NProgress.done() : Optional, it will be started/stoped in the event-show
            this.$router.push({
              name: 'event-show',
              params: { id: this.event.id }
            })
            this.event = this.createFreshEventObject()
          })
          .catch(() => {
            NProgress.done()
          })
      }
    },
    createFreshEventObject() {
      const user = this.$store.state.user.user
      const id = Math.floor(Math.random() * 10000000)

      return {
        id: id,
        user: user,
        category: '',
        organizer: user,
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        attendees: []
      }
    }
  }
}
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
