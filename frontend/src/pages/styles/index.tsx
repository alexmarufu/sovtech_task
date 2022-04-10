/** @jsxImportSource @emotion/react */
import { ChangeEvent } from "react";

const greyColor:string = "#d3d3d3"

export const Seperater = (props: any) => (
  <div
   css={{
       marginTop: "5px",
       marginBottom: "5px",
       borderTop: props.borderTop ? props.borderTop : `1px solid ${greyColor}`,
   }}
  />
)

export const SmallText = (props: any) => (
  <div
    css={{
      fontSize: props.fontSize ? props.fontSize : "auto",
      padding: props.padding ? props.padding : "auto",
      marginTop: props.marginTop ? props.marginTop : "auto",
      paddingTop: props.paddingTop ? props.paddingTop : "auto"
    }}
    {...props}
  />
);

export const Input = (props: any) => (
    <input
      value={props.value}
      placeholder={props.placeholder}
      onChange={(e:ChangeEvent<HTMLInputElement>) => props.onChange(e.target.value)}
      type="text"
      css={{
        border: props.border ? props.border : `1px solid ${greyColor}`,
        padding: props.padding ? props.padding : "8px",
        borderRadius: "20px",
        width: "500px",
        margin: "10px",
      }}
      {...props}
    />
  );

export const FlexContainer = (props: any) => (
  <div
    css={{
      alignItems: "center",
      display: "flex",
      overflowY: props.overflowY ? props.overflowY : "scroll",
      width: "100%",
      flexWrap: props.flexWrap ? props.flexWrap : "wrap",
	  borderRadius: props.borderRadius ? props.borderRadius : "auto",
      backgroundColor: props.backgroundColor ? props.backgroundColor : "#fff",
      justifyContent: props.justifyContent ? props.justifyContent : "center",
      marginTop: props.marginTop ? props.marginTop : "auto",
      marginBottom: props.marginBottom ? props.marginBottom : "auto",
      padding: props.padding ? props.padding : "auto",
      paddingLeft: props.paddingLeft ? props.paddingLeft : "auto",
      paddingRight: props.paddingRight ? props.paddingRight : "auto",
    }}
    {...props}
  />
);

export const Button = (props: any) => (
  <button
    css={{
      textAlign: props.textAlign ? props.textAlign : "center",
      padding: props.padding ? props.padding : "5px",
      backgroundColor: props.backgroundColor
        ? props.backgroundColor
        : "dodgerblue",
      color: props.color ? props.color : "#fff",
      margin: props.margin ? props.margin : "none",
      cursor: "pointer",
      bottom: props.bottom ? props.bottom : "auto",
      height: props.height ? props.height : "auto",
      width: props.width ? props.width : "auto",
      minWidth: props.minWidth ? props.minWidth : "120px",
      borderRadius: props.borderRadius ? props.borderRadius : "25px",
      marginTop: props.marginTop ? props.marginTop : "auto",
      marginLeft: props.marginLeft ? props.marginLeft : "auto",
      marginRight: props.marginRight ? props.marginRight : "auto",
      marginBottom: props.marginBottom ? props.marginBottom : "auto",
      fontSize: props.fontSize ? props.fontSize : "auto",
      paddingLeft: props.paddingLeft ? props.paddingLeft : "auto",
      paddingRight: props.paddingRight ? props.paddingRight : "auto",
      border: props.border ? props.border : "auto",
      "&:hover": {
        opacity: 0.9
      }
    }}
    {...props}
  />
);

export const Container = (props: any) => (
  <div
    css={{
      margin: 20,
      padding: 20,
      width: props.width ? props.width : "100%",
      overflowY: props.overflowY ? props.overflowY : "scroll",
      minHeight: props.minHeight ? props.minHeight : "500px",
      height: props.height ? props.height : "auto",
      border: props.border ? props.border : `1px solid ${greyColor}`,
      borderRadius: props.borderRadius ? props.borderRadius : "7px",
    }}
    {...props}
  />
);



export const CardContainer = (props: any) => (
  <div
    css={{
      paddingBottom: props.paddingBottom ? props.paddingBottom : "auto",
      margin: props.margin ? props.margin : "10px",
      padding: props.padding ? props.padding : "10px",
      width: props.width ? props.width : "250px",
      borderRadius: props.borderRadius ? props.borderRadius : "auto",
      boxShadow: props.boxShadow ? props.boxShadow : `0 0 1rem rgba(0,0,0,.05)`,
      cursor: "pointer",
    }}
    {...props}
  />
);

export const CardDetailContainer = (props: any) => (
    <div
      css={{
        border: `1px solid ${greyColor}`,
        backgroundColor: "white",
        paddingBottom: props.paddingBottom ? props.paddingBottom : "auto",
        margin: props.margin ? props.margin : "10px",
        padding: props.padding ? props.padding : "10px",
        width: props.width ? props.width : "200px",
        position: "absolute",
        borderRadius: props.borderRadius ? props.borderRadius : "7px",
        boxShadow: props.boxShadow ? props.boxShadow : `0 0 1rem rgba(0,0,0,.05)`,
      }}
      {...props}
    />
  );

export const PageContainer = (props: any) => (
    <div
      css={{
        //margin: "auto",
        marginTop: "40px",
        justifyContent: "center",
        display: "flex",
      }}
      {...props}
    />
  );

export const HeaderText = (props: any) => (
  <p
    css={{
      color: props.color ? props.color : "grey",
      textAlign: props.textAlign ? props.textAlign : "start",
      fontSize: props.fontSize ? props.fontSize : "1.6rem",
      paddingTop: props.paddingTop ? props.paddingTop : "auto",
      marginTop: props.marginTop ? props.marginTop : "auto",
      marginBottom: props.marginBottom ? props.marginBottom : "10px",
      marginRight: props.marginRight ? props.marginRight : "auto",
      marginLeft: props.marginLeft ? props.marginLeft : "auto",
      fontWeight: props.fontWeight ? props.fontWeight : "auto"
    }}
    {...props}
  />
);
