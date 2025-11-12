<script setup lang="ts">
const sectionRef = ref<HTMLElement | null>(null)

useInViewAnimation(sectionRef, 'animate-fade-in', { threshold: 0.3 })
</script>

<template>
  <section
    id="sobre"
    ref="sectionRef"
    class="flex items-center justify-center bg-background-offwhite"
  >
    <div class="container mx-auto px-4 py-20">
      <UiSectionTitle
        title="Sobre a Gatópolis"
        subtitle="Dedicação exclusiva ao bem-estar felino"
      />

      <div class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="space-y-6">
            <p class="text-lg text-gray-700 leading-relaxed">
              A Gatópolis é uma empresa de medicina felina pensada para quem entende que gatos precisam ser cuidados de um jeito único.
            </p>

            <p class="text-lg text-gray-700 leading-relaxed">
              Atendemos exclusivamente a domicílio, no ambiente onde o seu gato se sente seguro, sem transporte, espera ou ruídos de clínica.
            </p>

            <p class="text-lg text-gray-700 leading-relaxed">
              Essa escolha transforma o atendimento em uma experiência mais tranquila, empática e fiel ao comportamento natural do felino.
            </p>

            <p class="text-lg text-gray-700 leading-relaxed">
              Cada consulta é conduzida com tempo, técnica e sensibilidade, observando o gato no espaço dele, respeitando seus limites e oferecendo um cuidado realmente individualizado.
            </p>

            <p class="text-lg text-gray-700 leading-relaxed font-medium">
              Na Gatópolis, acreditamos que compreender o gato é o primeiro passo para cuidar bem. Cada atendimento é uma troca de confiança, feita com respeito, técnica e leveza, como deve ser entre quem entende de gatos.
            </p>
          </div>

          <div class="relative">
            <NuxtImg
              src="/images/aboutus.jpeg"
              alt="Veterinária cuidando de gato com carinho e atenção"
              class="rounded-2xl shadow-2xl w-full"
              loading="lazy"
              format="webp"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
