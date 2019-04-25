   <template>
  <form @submit.prevent="submit">
    <input
      @blur="$v.email.$touch()"
      type="email"
      placeholder="What's your email"
      v-model="email"
      :class="{error: $v.email.$error}"
    >
    <div v-if="$v.email.$error">
      <p v-if="!$v.email.email" class="errorMessage">Enter valid email</p>
      <p v-if="!$v.email.required" class="errorMessage">This field is requiered</p>
    </div>
    <BaseButton
      type="submit"
      style="margin:25px"
      :disabled="$v.$invalid"
      buttonClass="button -fill-gradient"
    >Submit</BaseButton>
    <p v-if="$v.$anyError" class="errorMessage">Check the errors</p>
  </form>
</template>
    
<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  methods: {
    submit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        console.log('Form Submitt')
      }
    }
  },
  data() {
    return {
      email: null
    }
  },
  validations: {
    email: { required, email }
  }
}
</script>


<style  scoped>
.error,
.errorMessage {
  color: red;
}
</style>
