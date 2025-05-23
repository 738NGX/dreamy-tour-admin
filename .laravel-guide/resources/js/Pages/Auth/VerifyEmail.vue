<script setup>
import { useForm, Head, Link } from "@inertiajs/vue3";
import { computed } from "vue";
import LayoutGuest from "@/layouts/LayoutGuest.vue";
import SectionFullScreen from "@/components/SectionFullScreen.vue";
import CardBox from "@/components/CardBox.vue";
import FormField from "@/components/FormField.vue";
import BaseDivider from "@/components/BaseDivider.vue";
import BaseButton from "@/components/BaseButton.vue";
import FormValidationErrors from "@/components/FormValidationErrors.vue";
import NotificationBarInCard from "@/components/NotificationBarInCard.vue";
import BaseLevel from "@/components/BaseLevel.vue";

const props = defineProps({
  status: {
    type: String,
    default: null,
  },
});

const form = useForm();

const verificationLinkSent = computed(
  () => props.status === "verification-link-sent"
);

const submit = () => {
  form.post(route("verification.send"));
};
</script>

<template>
  <LayoutGuest>
    <Head title="Email Verification" />

    <SectionFullScreen v-slot="{ cardClass }" bg="purplePink">
      <CardBox :class="cardClass" is-form @submit.prevent="submit">
        <FormValidationErrors />

        <NotificationBarInCard v-if="verificationLinkSent" color="info">
          A new verification link has been sent to the email address you
          provided during registration.
        </NotificationBarInCard>

        <FormField>
          <div class="mb-4 text-sm text-gray-600">
            Thanks for signing up! Before getting started, could you verify your
            email address by clicking on the link we just emailed to you? If you
            didn't receive the email, we will gladly send you another.
          </div>
        </FormField>

        <BaseDivider />

        <BaseLevel>
          <BaseButton
            type="submit"
            color="info"
            label="Resend Verification Email"
            :class="{ 'opacity-25': form.processing }"
            :disabled="form.processing"
          />
          <Link :href="route('logout')" method="post" as="button">
            退出登录
          </Link>
        </BaseLevel>
      </CardBox>
    </SectionFullScreen>
  </LayoutGuest>
</template>
