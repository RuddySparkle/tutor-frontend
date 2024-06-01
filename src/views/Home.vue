<template>
  <div>
    <h1>Welcome to Tutor Jobs!</h1>
    <JobTable />
  </div>
</template>

<script>
import JobTable from "@/modules/JobTable";

export default {
  components: {
    JobTable,
  },
};
</script>
